// core
import Block from '../../core/Block';

// data
import { info } from '../../data';

// types
import { IChatAsideProps, IChatEl } from './chat-aside.types';

// styles
import './chat-aside.scss';

export class ChatAside extends Block {
  constructor({ ...props }: IChatAsideProps) {
    super({ ...props });
  }

  render() {
    // language=hbs
    return `
      <aside class="chat-aside">
        <a class="chat-aside__profile-link" href="/profile">Профиль
          <button class="chat-aside__profile-btn"></button>
        </a>
        {{{Search}}}
        <ul class="chat-page__list">
          ${info
            .map(
              (el: IChatEl) => `
            {{{Chat name="${el.name}" text="${el.text}" time="${
                el.time
              }" time="${el.time}" count="${el.count || ''}" person="${
                el.person || ''
              }" modificator="${el.modificator || ''}" }}}`
            )
            .join('')}
        </ul>
      </aside>
    `;
  }
}
