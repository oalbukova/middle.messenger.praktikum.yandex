// core
import Block from '../../core/Block';

// data
import { footerInput } from '../../data';

// types
import { IChatFooterProps, IChatFooter } from './chat-footer.types';

// styles
import './chat-footer.scss';

export class ChatFooter extends Block {
  constructor({ ...props }: IChatFooterProps) {
    super({ ...props });
  }

  render() {
    // language=hbs
    return `
      <footer class="chat-footer">
        {{{ModalFile}}}
        <button class="chat-footer__file-btn"></button>
        <div class="chat-footer__input">
        ${footerInput
          .map(
            (el: IChatFooter) => `
          {{{Input name="${el.name}" placeholder="${el.placeholder}" id="${el.id}" type="${el.type}" }}}`
          )
          .join('')}
        </div>
        <button class="chat-footer__btn"></button>
      </footer>
    `;
  }
}
