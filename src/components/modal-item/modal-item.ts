// core
import Block from '../../core/Block';

// types
import { IModalItemProps } from './modal-item.types';

// styles
import './modal-item.scss';

export class ModalItem extends Block {
  constructor(props: IModalItemProps) {
    super({ ...props });
  }

  render() {
    // language=hbs
    return `
      <li>
        <button class="modal-item">
          <img src={{src}} alt={{title}} class="modal-item__img {{#if modificator}} modal-item__img_{{modificator}}{{/if}}"/>
          <p class="modal-item__text">{{title}}</p>
        </button>
      </li>
    `;
  }
}
