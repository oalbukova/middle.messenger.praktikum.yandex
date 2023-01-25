// core
import Block from 'core/Block';

// validate
import { onHandleBlur, onHandleSubmit } from 'helpers/validateForm';


// styles
import './chat-footer.scss';

export class ChatFooter extends Block {
  static componentName = 'ChatFooter';

  constructor() {
    super({});
    this.setProps({
      onBlur: (e: Event) => onHandleBlur(e, this.refs),
      onSubmit: (e: SubmitEvent) => {
        const data: string | undefined = onHandleSubmit(e, this.refs);


      },


      events: {
        click: () => {
          const modal = document.querySelector('.modal-file');
          modal?.classList.contains('modal-file_active')
            ? modal.classList.remove('modal-file_active')
            : modal?.classList.add('modal-file_active');
        },
      },
    });
  }

  render() {
    // language=hbs
    return `
      <footer class="chat-footer">
        {{{ModalFile}}}
        <form class="chat-footer__form">
          <button class="chat-footer__file-btn" type="button" click=click></button>
          <div class="chat-footer__input">
            {{{ControlledInput ref="message" type="text" name="message" placeholder="Сообщение" onBlur=onBlur }}}
          </div>
          {{{ChatBtn onClick=onSubmit}}}
        </form>
      </footer>
    `;
  }
}
