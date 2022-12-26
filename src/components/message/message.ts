// core
import Block from '../../core/Block';

// types
import { IMessageProps } from './message.types';

// styles
import './message.scss';

export class Message extends Block {
  constructor(props: IMessageProps) {
    super({ ...props });
  }

  render() {
    // language=hbs
    return `
      <div class="message {{#if incoming}}message_incoming {{else}}message_outgoing{{/if}}">
        {{#if src}}
          <img src={{src}} alt="картинка" class="message__img"/>
          <span class="message__time message__time_src">{{time}}</span>
        {{else}}
          <p class="message__text">{{message}}</p>
          <div class="message__time-wrapper">
          {{#if incoming}}{{else}}
            <img src="/static/images/read.svg" alt=" прочитано" />
          {{/if}}
          <span class="message__time {{#if incoming}}message__time_incoming {{else}}message__time_outgoing{{/if}}">{{time}}</span>
        </div>
      {{/if}}
    </div>
    `;
  }
}
