// core
import Block from '../../core/Block';

// styles
import './modal-delete.scss';

export class ModalDelete extends Block {
  render() {
    // language=hbs
    return `
      <div class="modal-delete">
        <div class="modal-delete__overlay"></div>
        <div class="modal-delete__paper">
          <button class="modal-delete__close-btn"></button>
          {{{FormTitle formTitle="Удалить пользователя"}}}
          {{#with modal.input}}{{{Input}}}{{/with}}
          <div class="modal-delete__btn-container">
            {{{Button text="Удалить"}}}
          </div>
        </div>
      </div>
    `;
  }
}
