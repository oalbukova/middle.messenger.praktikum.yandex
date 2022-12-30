// core
import Block from 'core/Block';

// types
import { IInputProps } from './input.types';

// styles
import './input.scss';

export class Input extends Block {
  static componentName = 'Input';

  constructor({ onFocus, onBlur, ...props }: IInputProps) {
    super({
      ...props,
      events: { focus: onFocus, blur: onBlur },
    });
  }

  render() {
    // language=hbs
    return `
      <input class="input {{#if text}}input_type_error{{/if}}" type="{{type}}" name="{{name}}" placeholder="{{placeholder}}">
    `;
  }
}
