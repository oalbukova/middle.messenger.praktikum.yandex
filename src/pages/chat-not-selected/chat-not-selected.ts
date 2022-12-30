// core
import Block from 'core/Block';

// styles
import './chat-not-selected.scss';

export class ChatNotSelectedPage extends Block {
  render() {
    // language=hbs
    return `
      <section class="chat-page">
        {{{ChatAside }}}
        <p class="chat-page__text">Выберите чат чтобы отправить сообщение</p>
      </section>
    `;
  }
}
