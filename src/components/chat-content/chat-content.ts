// core
import Block from 'core/Block';

// data
import { contentInfo } from 'data';

// types
import { IChatContentProps, IChatContent } from './chat-content.types';

// styles
import './chat-content.scss';

export class ChatContent extends Block {
  static componentName = 'ChatContent';

  constructor({ ...props }: IChatContentProps) {
    super({ ...props });
  }

  render() {
    // language=hbs
    return `
      <section class='chat-content'>
        <p class='chat-content__date'>19 июня</p>
        ${contentInfo
          .map(
            (el: IChatContent) => `
          {{{Message modificator="${el.modificator}" time="${
              el.time
            }" message="${el.message || ''}" src="${el.src || ''}" read="${
              el.read || ''
            }" }}}`
          )
          .join('')}
        {{#each content.info}}
          {{{Message}}}
        {{/each}}
      </section>
    `;
  }
}
