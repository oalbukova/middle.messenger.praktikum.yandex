// core
import Block from 'core/Block';

// types
import { IInputProps } from './input.types';

// styles
import './input.scss';

export class Input extends Block {
  static componentName = 'Input';

  constructor({ onInput, onFocus, onBlur, ...props }: IInputProps) {
    super({
      ...props,
      events: { input: onInput, focus: onFocus, blur: onBlur },
    });
  }

  render() {
    // language=hbs
    return `
      <input class="input {{#if text}}input_type_error{{/if}}" type="{{type}}" name="{{name}}" placeholder="{{placeholder}}">
    `;
  }
}
