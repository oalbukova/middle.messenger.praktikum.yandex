// core
import Block from '../../core/Block';

// data
import { buttons } from '../../data';

// types
import { IModalChat } from './modal-chat.types';

// styles
import './modal-chat.scss';

export class ModalChat extends Block {
  render() {
    // language=hbs
    return `
      <ul class="modal-chat">
      ${buttons
        .map(
          (el: IModalChat) => `
        {{{ModalItem title="${el.title}" src="${el.src}" modificator="${el.modificator}" }}}`
        )
        .join('')}
      </ul>
    `;
  }
}
