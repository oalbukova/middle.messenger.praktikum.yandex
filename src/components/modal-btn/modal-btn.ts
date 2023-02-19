// core
import { Block } from 'core';

// types
import { IModalButtonProps } from './modal-btn.types';
// styles
import './modal-btn.scss';

export class ModalButton extends Block {
  static componentName = 'ModalButton';

  constructor({ onClick, ...props }: IModalButtonProps) {
    super({
      ...props,
      events: { click: onClick },
    });
  }

  render() {
    // language=hbs
    return `
        <li>
          <button class="modal-item" type="button">
            <img src={{src}} alt={{title}} class="modal-item__img {{#if modificator}} modal-item__img_{{modificator}}{{/if}}"/>
            <p class="modal-item__text">{{title}}</p>
          </button>
        </li>
    `;
  }
}
