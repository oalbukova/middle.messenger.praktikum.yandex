// core
import Block from '../../core/Block';

// styles
import './modal-file.scss';

export class ModalFile extends Block {
  render() {
    // language=hbs
    return `
      <ul class="modal-file">
        {{#each file.buttons}}
          {{{ModalItem}}}
        {{/each}}
      </ul>
    `;
  }
}
