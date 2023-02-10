// core
import { Block } from 'core';

// data
import { fileButtons } from 'data';

// types
import { IModalFile } from './modal-file.types';

// styles
import './modal-file.scss';

export class ModalFile extends Block {
  static componentName = 'ModalFile';

  render() {
    // language=hbs
    return `
      <ul class="modal-file">
      ${fileButtons
        .map(
          (el: IModalFile) => `
        {{{ModalItem title="${el.title}" src="${el.src}" modificator="${el.modificator}" }}}`
        )
        .join('')}
      </ul>
    `;
  }
}
