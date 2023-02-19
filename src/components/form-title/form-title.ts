// core
import { Block } from 'core';

// types
import { IFormTitleProps } from './form-title.types';

// styles
import './form-title.scss';

export class FormTitle extends Block {
  static componentName = 'FormTitle';

  constructor(props: IFormTitleProps) {
    super({ ...props });
  }

  render() {
    // language=hbs
    return `
      <h1 class="form-title">{{formTitle}}</h1>
    `;
  }
}
