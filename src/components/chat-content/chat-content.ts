// core
import Block from '../../core/Block';

// styles
import './chat-content.scss';

export class ChatContent extends Block {
  render() {
    // language=hbs
    return `
      <section class='chat-content'>
        <p class='chat-content__date'>19 июня</p>
        {{#each content.info}}
          {{{Message}}}
        {{/each}}
      </section>
    `;
  }
}
