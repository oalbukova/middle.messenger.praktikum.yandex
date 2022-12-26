// core
import Block from '../../core/Block';

// types
import { IInputProps } from './input.types';

// styles
import './input.scss';

export class Input extends Block {
  constructor(props: IInputProps) {
    const onClick = (e: MouseEvent) => {
      console.log('Input clicked');
      e.preventDefault();
    };
    super({ ...props, events: { click: onClick } });
  }

  render() {
    // language=hbs
    return `
      <div class="input">
        <input class="input__input" type={{type}} id={{id}} name={{name}} placeholder={{placeholder}} {{#if required}}required{{/if}} {{#if value}}value={{value}}{{/if}}>
        <span class="input__error-message" id="{{id}}-error">{{errorMsg}}</span>
      </div>
    `;
  }
}
