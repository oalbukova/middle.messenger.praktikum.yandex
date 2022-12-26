// core
import Block from '../../core/Block';

// styles
import './modal-chat.scss';

export class ModalChat extends Block {
  render() {
    // language=hbs
    return `
      <ul class="modal-chat">
        {{#each user.buttons}}
          {{{ModalItem}}}
        {{/each}}
      </ul>
    `;
  }
}
