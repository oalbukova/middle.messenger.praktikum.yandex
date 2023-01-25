// core
import Block from 'core/Block';

// controller
import AuthController from '../../controllers/AuthController';

import ChatsController from '../../controllers/ChatsController';

import store from '../../core/store';
import { withStore } from '../../hoc/withStore';

// styles
import './chat-page.scss';

export class ChatPageBase extends Block {
  constructor() {
    super()
    // ChatsController.fetchChats();
    // // MessageControll.getMessages();
    // this.setProps({
    //   chats: () => store.getState().chats,
    // });

  }


  render() {



    // console.log(store.getState().chats)
    // language=hbs
    return `
      <section class="chat-page">
        {{{ChatAside}}}
        <div class="chat-page__wrapper">
          {{{ChatHeader}}}
          {{{ChatContent}}}
          {{{ChatFooter}}}
        </div>
      </section>
    `;
  }
}

const withChats = withStore((state) => ({ ...state.user }));
export const ChatPage = withChats(ChatPageBase);

