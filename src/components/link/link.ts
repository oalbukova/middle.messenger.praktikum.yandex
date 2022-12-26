// core
import Block from '../../core/Block';

// types
import { ILinkProps } from './link.types';

// styles
import './link.scss';

export class Link extends Block {
  constructor(props: ILinkProps) {
    super({ ...props });
  }

  render() {
    // language=hbs
    return `
      <a class="link {{#if modificator}}link_{{modificator}}{{/if}}" href={{href}}>{{text}}</a>
    `;
  }
}
