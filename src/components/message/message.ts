// core
import Block from '../../core/Block';

// styles
import './message.scss';

export class Message extends Block {
  render() {
    // language=hbs
    return `
      <div class="message message_{{modificator}}">
        {{#if src}}
          <img src={{src}} alt="картинка" class="message__img"/>
          <span class="message__time message__time_src">{{time}}</span>
        {{else}}
          <p class="message__text">{{message}}</p>
          <div class="message__time-wrapper">
          {{#if read}}
            <div class="message__read"></div>
          {{/if}}
          <span class="message__time message__time_{{modificator}}">{{time}}</span>
        </div>
      {{/if}}
    </div>
    `;
  }
}
