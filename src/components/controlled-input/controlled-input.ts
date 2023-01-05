// core
import Block from 'core/Block';

// validate
import { onHandleBlur, onHandleFocus } from 'helpers/validateForm';

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
        {{{Input ref="inputRef" name="{{name}}" type="{{type}}" placeholder="{{placeholder}}" onFocus=onFocus onBlur=onBlur }}}
        {{{ErrorComponent ref="errorRef" text=error }}}
      </div>
    `;
  }
}
