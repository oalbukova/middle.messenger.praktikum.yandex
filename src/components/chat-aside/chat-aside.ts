// core
import Block from 'core/Block';

// data
import { info } from 'data';

// store
import store from '../../core/store';

//controllers
import ChatsController from "../../controllers/ChatsController"

// types
import { IChatAsideProps, IChatEl } from './chat-aside.types';

// styles
import './chat-aside.scss';

export class ChatAside extends Block {
  static componentName = 'ChatAside';
  constructor({ ...props }: IChatAsideProps) {
    super({ ...props });
    this.setProps({
      // chats: store.getState().chatList,

    });
  }
  // constructor({ ...props }: IChatAsideProps) {
  //   super({ ...props });

  // }

  // public init(): void {
  //   ChatsController.fetchChats();
  //   console.log( store.getState().user)
  //   };



  render() {
    // console.log(this.props)
    // language=hbs
    return `
      <aside class="chat-aside">
        <a class="chat-aside__profile-link" href="/settings">Профиль
          <button class="chat-aside__profile-btn"></button>
        </a>
        {{{Search}}}
        <ul class="chat-page__list">
          ${info
            .map(
              (el: IChatEl) => `
            {{{Chat name="${el.name}" text="${el.text}" time="${
                el.time
              }" time="${el.time}" count="${el.count || ''}" person="${
                el.person || ''
              }" modificator="${el.modificator || ''}" }}}`
            )
            .join('')}
        </ul>
      </aside>
    `;
  }
}
