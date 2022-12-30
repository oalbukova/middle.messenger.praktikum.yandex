// core
import Block from 'core/Block';

// styles
import './chat.scss';
export class Chat extends Block {
  static componentName = 'Chat';

  render() {
    // language=hbs
    return `
      <li class="chat {{#if modificator}} chat_{{modificator}}{{/if}}">

        <div class="chat-about">
          <div class="chat-about__avatar"></div>
          <div class="chat-about__info">
            <p class="chat-about__name">{{name}}</p>
            <div class="chat-about__text-container">
              {{#if person}} <p class="chat-about__person">{{person}}:</p>
                <p class="chat-about__text-small">{{text}}</p>
              {{else}}
                <p class="chat-about__text">{{text}}</p>{{/if}}
            </div>
          </div>
          <div class="chat-about__time-wrapper">
            <p class="chat-about__time">{{time}}</p>
            {{#if count}}<div class="chat-about__count">
              <p class="chat-about__count-text">{{count}}</p>
            </div>{{/if}}
          </div>
        </div>
      </li>
    `;
  }
}
