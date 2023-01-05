// core
import Block from 'core/Block';

// types
import { IErrorProps } from './error.types';

// styles
import './error.scss';

export class ErrorComponent extends Block<IErrorProps> {
  static componentName = 'ErrorComponent';

  render() {
    // language=hbs
    return `
      <span class="error error_visible">{{#if text}}{{text}}{{/if}}</span>
    `;
  }
}
