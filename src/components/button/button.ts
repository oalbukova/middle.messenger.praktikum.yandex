// core
import { Block } from 'core';

// types
import { IButtonProps } from './button.types';

// styles
import './button.scss';

export class Button extends Block {
  static componentName = 'Button';

  constructor({ onClick, ...props }: IButtonProps) {
    super({ ...props, events: { click: onClick } });
  }

  render() {
    // language=hbs
    return `
      <button class="button {{#if modificator}}button_{{modificator}}{{/if}}" type="submit" click=onClick>{{text}}</button>
    `;
  }
}
