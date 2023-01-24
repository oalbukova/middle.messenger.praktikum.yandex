// core
import Block from 'core/Block';

// types
import { ILoaderProps } from './loader.types';

// styles
import './loader.scss';

export class Loader extends Block {
  static componentName = 'Loader';

  constructor(props: ILoaderProps) {
    super({ ...props });
  }

  render() {
    // language=hbs
    return `
      <div class="preloader {{#if modificator}}preloader_{{modificator}}{{/if}}">
        <div class="circle-preloader"/>
      </div>
    `;
  }
}
