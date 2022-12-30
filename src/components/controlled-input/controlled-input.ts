// core
import Block from 'core/Block';

// types
import { IControlledInputProps } from './controlled-input.types';

// styles
import './controlled-input.scss';

export class ControlledInput extends Block {
  static componentName = 'ControlledInput';

  constructor(props: IControlledInputProps) {
    super({
      ...props,

      onFocus: (e: FocusEvent) => {
        const imputEl = e.target as HTMLInputElement;
        this.refs.errorRef.setProps({ text: '' });
        imputEl.classList.remove('input_type_error');
      },
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
