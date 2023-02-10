// core
import { Block } from 'core';

// types
import { IButtonProps } from './chat-btn.types';

// styles
import './chat-btn.scss';

export class ChatBtn extends Block {
  static componentName = 'ChatBtn';

  constructor({ onClick, ...props }: IButtonProps) {
    super({ ...props, events: { click: onClick } });
  }

  render() {
    // language=hbs
    return `
      <button type="submit" class="chat-btn" click=onClick></button>
    `;
  }
}
