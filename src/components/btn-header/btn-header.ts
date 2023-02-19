// core
import { Block } from 'core';

// types
import { IButtonProps } from './btn-header.types';

// styles
import './btn-header.scss';

export class BtnHeader extends Block {
  static componentName = 'BtnHeader';

  constructor({ onClick, ...props }: IButtonProps) {
    super({ ...props, events: { click: onClick } });
  }

  render() {
    // language=hbs
    return `
      <button class="btn" type="button" click=onClick>
        <div class="img"></div>
      </button>
    `;
  }
}
