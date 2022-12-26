// core
import Block from '../../core/Block';

// styles
import './chat-page.scss';

export class ChatPage extends Block {
  render() {
    // language=hbs
    return `
      <section class="chat-page">
        {{{ChatAside}}}
        <div class="chat-page__wrapper">
          {{ChatHeader}}}
          {{{ChatContent}}}
          {{{ChatFooter}}}
        </div>
      </section>
    `;
  }
}
