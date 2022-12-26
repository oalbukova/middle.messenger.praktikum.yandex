// core
import Block from '../../core/Block';

// styles
import './chat-aside.scss';

export class ChatAside extends Block {
  render() {
    // language=hbs
    return `
      <aside class="chat-aside">
        <a class="chat-aside__profile-link" href="/profile">Профиль
          <img class="chat-aside__profile-btn" src="/static/images/arrow.svg" alt="переход на страницу профиля"/>
        </a>
        {{{Search}}}
        <ul class="chat-page__list">
          {{#each chat.info}}
            {{{Chat}}}
          {{/each}}
        </ul>
      </aside>
    `;
  }
}
