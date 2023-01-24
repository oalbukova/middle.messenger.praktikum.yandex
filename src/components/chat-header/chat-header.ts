// core
import Block from 'core/Block';

// styles
import './chat-header.scss';

export class ChatHeader extends Block {
  static componentName = 'ChatHeader';
  constructor() {
    super();
    this.setProps({
      events: {
        click: () => {
          const modal = document.querySelector('.modal-chat');
          modal?.classList.contains('modal-chat_active')
            ? modal.classList.remove('modal-chat_active')
            : modal?.classList.add('modal-chat_active');
        },
      },
    });
  }

  render() {
    // language=hbs
    return `
      <header class="chat-header">
        <div class="chat-header__info">
          <div class="chat-header__avatar"></div>
          <p class="chat-header__name">Марина</p>
        </div>
        <button class="chat-header__btn" type="button" click=click>
          <div class="chat-header__img"></div>
        </button>
        {{{ModalChat}}}
      </header>
    `;
  }
}
