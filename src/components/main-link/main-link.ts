// core
import Block from 'core/Block';

// types
import { IMainLinkProps } from './main-link.types';

// styles
import './main-link.scss';

export class MainLink extends Block {
static componentName = "MainLink";

  constructor(props: IMainLinkProps) {
    super({ ...props });
  }

  render() {
    // language=hbs
    return `
      <li class="list__item">
        <a href={{href}} class="list__link">{{title}}</a>
      </li>
    `;
  }
}
