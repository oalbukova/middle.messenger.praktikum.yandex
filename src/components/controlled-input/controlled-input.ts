// core
import { Block } from 'core';

// validate
import { onHandleFocus } from 'helpers/validateForm';

// types
import { IControlledInputProps } from './controlled-input.types';

// styles
import './controlled-input.scss';

export class ControlledInput extends Block {
  static componentName = 'ControlledInput';

  constructor(props: IControlledInputProps) {
    super({
      ...props,
      onFocus: (e: FocusEvent) => onHandleFocus(e, this.refs),
    });
  }

  render() {
    // language=hbs
    return `
      <div class="controlled-input">
        {{#if value}}
          {{{Input ref="inputRef" value="{{value}}" name="{{name}}" type="{{type}}" placeholder="{{placeholder}}" onFocus=onFocus onBlur=onBlur }}}
        {{else}}
          {{{Input ref="inputRef" name="{{name}}" type="{{type}}" placeholder="{{placeholder}}" onFocus=onFocus onBlur=onBlur }}}
        {{/if}}
        {{{ErrorComponent ref="errorRef" text=error }}}
      </div>
    `;
  }
}
