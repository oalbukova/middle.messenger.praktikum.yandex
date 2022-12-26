// core
import Block from '../../core/Block';

// styles
import './chat-header.scss';

export class ChatHeader extends Block {

  render() {
    // language=hbs
    return `
      <header class="chat-header">
        <div class="chat-header__info">
          <img
            class="chat-header__avatar"
            src="/static/images/avatar.png"
            alt="фото контакта"
          />
          <p class="chat-header__name">Марина</p>
        </div>
        <button class="chat-header__btn">
          <div class="chat-header__img"></div>
        </button>
        {{{ModalChat}}}
      </header>
    `;
  }
}
