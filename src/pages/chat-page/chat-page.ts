// core
import { store, withUser, Block } from '../../core';

// controller
import ChatsController from '../../controllers/ChatsController';

// utils
import { onModal } from '../../utils';

// image
import avatarImg from '../../../static/images/avatar.png';

// styles
import './chat-page.scss';

class ChatPageBase extends Block {
  constructor(props: any) {
    super({
      ...props,
      defaultSrc: avatarImg,

      onInputSearchChat: async (e: Event) => {
        const searchTitle = (e.target as HTMLInputElement)!.value;
        await ChatsController.setFoundChats(searchTitle);
      },
      onAddChatClick: () => onModal('ModalAddChat'),
      onItemClick: async (e: Event) => {
        const el = (e.target as HTMLElement).closest('.chat') as HTMLElement;

        if (el.hasAttribute('data-itemId')) {
          e.preventDefault();
          const itemId = Number(el.getAttribute('data-itemId'));

          if (store.getState().chats?.chatList?.[itemId]) {
            await ChatsController.select(itemId);
          }
        }
      },
    });
  }

  render() {
    // language=hbs
    return `
      <section class="chat-page">
        <aside class="chat-aside">
          <a class="chat-aside__profile-link" href="/settings">Профиль
            <button class="chat-aside__profile-btn"></button>
          </a>
          {{{Search ref="search" type="text" name="search" id="search" value=searchValue placeholder="Поиск" onChange=onInputSearchChat }}}
          <div class="add-chat">
          <p class="add-chat__text">Добавить чат</p>
            {{{BtnAdd onClick=onAddChatClick }}}
            {{{ModalAddChat id="ModalAddChat"}}}
            {{{ModalAdd id="ModalAdd"}}}
            {{{ModalDelete id="ModalDelete"}}}
          </div>
          <div class="chat-page__list" >
            {{#if ${Object.keys(this.props.chatList).length !== 0}}}
              {{#Chatlist onClick=onItemClick}}
                {{#each chatList}}
                  {{#with this}}
                    <li class="chat {{#if selected}} chat_active{{/if}}" data-itemId="{{id}}">
                      {{#if avatar }}
                        <img class="chat-about__avatar" alt="аватар" src="https://ya-praktikum.tech/api/v2/resources{{avatar}}"/>
                      {{else}}
                        <img class="chat-about__avatar" alt="аватарNull" src="${
                          this.props.defaultSrc
                        }"></img>
                      {{/if}}
                      <div class="chat-about">
                        <div class="chat-about__info">
                          <p class="chat-about__name">{{title}}</p>
                          <div class="chat-about__text-container">
                            {{#if last_message.person }}
                              <p class="chat-about__person">{{last_message.person}}</p>
                              <p class="chat-about__text-small">{{last_message.content}}</p>
                            {{else}}
                              <p class="chat-about__text">{{last_message.content}}</p>
                            {{/if}}
                          </div>
                        </div>
                        <div class="chat-about__time-wrapper">
                        {{#if last_message.time }}
                          <p class="chat-about__time">{{last_message.time}}</p>
                        {{/if}}
                        {{#if unread_count}}
                          <div class="chat-about__count">
                            <p class="chat-about__count-text">{{unread_count}}</p>
                          </div>
                        {{/if}}
                      </div>
                    </div>
                  </li>
                {{/with}}
              {{/each}}
            {{/Chatlist }}
          {{else}}
            <p class="chat-page__not-found">Чатов не найдено</p>
          {{/if}}
          </ul>
        </aside>
        <div class="chat-page__wrapper">
          {{#if ${this.props.selectedChat} }}
            {{{ChatHeader avatar="${
              this.props.chatList[this.props.selectedChat]?.avatar
              }" title="${
              this.props.chatList[this.props.selectedChat]?.title
              }" userCount=${
              this.props.chatList[this.props.selectedChat]?.user_list?.length
              } }}}
            <section class='chat-content'>
              {{#if ${
                store.getState().messages &&
                store.getState().messages?.list?.length !== 0
              } }}
                ${store
                  .getState()
                  .messages?.list?.map(
                    (el: any) => `
                  <p class='chat-content__date'>${el.day}</p>
                  {{{Message modificator="${
                    el.isMine ? 'outgoing' : 'incoming'
                  }" time="${el.timeInfo}" message="${el.content || ''}" src="${
                      el.file || ''
                    }" read="${el.is_read || ''}" }}}
                    `
                  )
                  .join('')}
              {{else}}
                <p class="chat-page__text">Пока сообщений нет</p>
              {{/if}}
            </section>
            {{{ChatFooter}}}
          {{else}}
            <p class="chat-page__text">Выберите чат чтобы отправить сообщение</p>
          {{/if}}
        </div>
      </section>
    `;
  }
}

export const ChatPage = withUser(ChatPageBase);
