// core
import Block from 'core/Block';

// store
import store, { StoreEvents } from '../../core/store';
import { withStore } from '../../hoc/withStore';

// controller
import ChatsController from '../../controllers/ChatsController';

// utils
import { dateFormater, debounce } from '../../utils';

// images
import avatarImg from '../../../static/images/avatar.png';

// styles
import './chat-aside.scss';

export class ChatAsideBase extends Block {
  static componentName = 'ChatAside';

  constructor() {
    super({});
    this.setProps({
      chats: store.getState().chats,
      dafaultSrc: avatarImg,
      user: store.getState().user.login,
      onInputSearchChat:  (e: Event) => debounce(this.onInputSearchChat(e), 800),
    });
  }

  onInputSearchChat(e: Event) {
    const searchTitle = (e.target as HTMLInputElement)!.value;
    ChatsController.setFoundChats(searchTitle);
}

  render() {
    console.log(this.props.chats);
    // language=hbs
    return `
      <aside class="chat-aside">
        <a class="chat-aside__profile-link" href="/settings">Профиль
          <button class="chat-aside__profile-btn"></button>
        </a>
        {{{Search onInputSearchChat=onInputSearchChat }}}
        <ul class="chat-page__list">
        {{#if ${this.props.chats && this.props.chats !== undefined}}}
          ${this.props.chats
            ?.map(
              (el: Chat) => `
                <li class="chat {{#if modificator}} chat_{{modificator}}{{/if}}">
                  {{#if ${el.avatar !== null} }}
                    <img class="chat-about__avatar" alt="аватар" src="https://ya-praktikum.tech/api/v2/resources/${
                      el.avatar
                    }"></img>
                  {{else}}
                    <img class="chat-about__avatar" alt="аватарNull" src={{this.dafaultSrc}}></img>
                  {{/if}}
                  <div class="chat-about">
                    <div class="chat-about__info">
                      <p class="chat-about__name">${el.title}</p>
                      <div class="chat-about__text-container">
                        {{#if ${
                          el.last_message?.user?.login === this.props.user
                        } }}<p class="chat-about__person">Вы:</p>
                          <p class="chat-about__text-small">${
                            el.last_message?.content || ''
                          }</p>
                        {{else}}
                          <p class="chat-about__text">${
                            el.last_message?.content || ''
                          }</p>
                        {{/if}}
                      </div>
                    </div>
                    <div class="chat-about__time-wrapper">
                      <p class="chat-about__time">${
                        (el.last_message?.time &&
                          dateFormater(el.last_message.time)) ||
                        ''
                      }</p>
                      {{#if count}}<div class="chat-about__count">
                        <p class="chat-about__count-text">${el.unread_count}</p>
                      </div>{{/if}}
                    </div>
                  </div>
                </li>`
            )
            .join('')}
          {{else}}
              <p class="chat-page__not-found">Чатов не найдено</p>
          {{/if}}
        </ul>
      </aside>
    `;
  }
}

const witChatList = withStore((state) => ({ ...state.chats }), [StoreEvents.SelectedChatUpdated, StoreEvents.ChatsUpdated]);
export const ChatAside = witChatList(ChatAsideBase as typeof Block);

// const withChatList = withStore((state) => ({
//   userLogin: state.user.login,
//   // selectedChat: state.selectedChat,
//   chats: [...(state.chats || [])],
// }), [StoreEvents.SelectedChatUpdated, StoreEvents.ChatsUpdated]);

// export default withChatList(ChatAside as typeof Block);
