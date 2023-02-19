// core
import { Block } from 'core';

// types
import { IButtonProps } from './btn-add.types';

// image
import plusImg from '../../../static/images/plus.svg';

// styles
import './btn-add.scss';

export class BtnAdd extends Block {
  static componentName = 'BtnAdd';

  constructor({ onClick, ...props }: IButtonProps) {
    super({ ...props, plusSrc: plusImg, events: { click: onClick } });
  }

  render() {
    // language=hbs
    return `
      <button type="submit" class="chat-btn-add" click=onClick>
        <img src="${this.props.plusSrc}" alt="добавить чат" class="add-chat__img"/>
      </button>
    `;
  }
}
