// core
import Block from '../../core/Block';

// styles
import './chat-footer.scss';

export class ChatFooter extends Block {
  render() {
    // language=hbs
    return `
      <footer class="chat-footer">
        {{{ModalFile}}
        <button class="chat-footer__file-btn"></button>
        <div class="chat-footer__input">
          {{#with footer.input}}{{{Input}}}{{/with}}
        </div>
        <button class="chat-footer__btn"></button>
      </footer>
    `;
  }
}
