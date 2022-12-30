// core
import Block from 'core/Block';

// validate
import { validateForm, ValidateType } from 'helpers/validateForm';

// styles
import './chat-footer.scss';

export class ChatFooter extends Block {
  static componentName = 'ChatFooter';
  constructor() {
    super();
    this.setProps({
      onBlur: (e: Event) => {
        const messageRef = this.refs.messageInputRef;
        const imputEl = e.target as HTMLInputElement;
        const errorMessageMessage = validateForm([
          { type: ValidateType.Message, value: imputEl.value },
        ]);

        if (imputEl.name === 'message') {
          messageRef.refs.errorRef.setProps({
            text: errorMessageMessage,
          });
          errorMessageMessage
            ? imputEl.classList.add('input_type_error')
            : imputEl.classList.remove('input_type_error');
        }
      },

      onSubmit: (e: SubmitEvent) => {
        e.preventDefault();
        const messageEl = this.element?.querySelector(
          'input[name="message"]'
        ) as HTMLInputElement;

        const messageRef = this.refs.messageInputRef;

        const errorMessageMessage = validateForm([
          { type: ValidateType.Message, value: messageEl.value },
        ]);

        if (messageEl) {
          messageRef.refs.errorRef.setProps({
            text: errorMessageMessage,
          });
          errorMessageMessage
            ? messageEl.classList.add('input_type_error')
            : messageEl.classList.remove('input_type_error');
        }

        if (!errorMessageMessage) {
          console.log(
            'form ready to send to API.',
            `message: ${messageEl.value}`
          );
          messageEl.value = '';
        }
      },
    });
  }

  render() {
    // language=hbs
    return `
      <footer class="chat-footer">
        {{{ModalFile}}}
        <form class="chat-footer__form">
          <button class="chat-footer__file-btn"></button>
          <div class="chat-footer__input">
            {{{ControlledInput ref="messageInputRef" type="text" name="message" placeholder="Сообщение" onBlur=onBlur }}}
          </div>
          {{{ChatBtn onClick=onSubmit}}}
        </form>
      </footer>
    `;
  }
}
