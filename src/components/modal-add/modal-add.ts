// core
import Block from '../../core/Block';

// styles
import './modal-add.scss';

export class ModalAdd extends Block {
  render() {
    // language=hbs
    return `
      <div class="modal-add">
        <div class="modal-add__overlay"></div>
        <div class="modal-add__paper">
          <button class="modal-add__close-btn"></button>
          {{{FormTitle formTitle="Добавить пользователя"}}}
          {{#with modal.input}}{{{Input}}}{{/with}}
          <div class="modal-add__btn-container">
            {{{Button text="Добавить"}}}
          </div>
        </div>
      </div>
    `;
  }
}
