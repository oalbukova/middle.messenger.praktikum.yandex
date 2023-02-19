// core
import { Block } from 'core';

// controllers
import ChatsController from '../../controllers/ChatsController';

// styles
import './modal-add-chat.scss';

type ModalProps = {
  id: string;
};

export class ModalAddChat extends Block {
  static componentName = 'ModalAddChat';

  constructor({ ...props }: ModalProps) {
    super({
      ...props,

      onAddChat: async (e: SubmitEvent) => {
        e.preventDefault();
        const chatName = (
          document.getElementsByName('chatName')[0] as HTMLInputElement
        ).value;
        if (chatName) {
          await ChatsController.create(chatName);
        }
      },
    });
  }

  render() {
    // language=hbs
    return `
      <div class="modal-add-chat" id="{{id}}">
        <form class="modal-add-chat__paper">
          <button class="close {{id}}" type="button"></button>
          {{{FormTitle formTitle="Добавить чат"}}}
            {{{ControlledInput ref="chatName" type="text" name="chatName" placeholder="имя чата" onBlur=onBlur id="chatName" }}}
            <div class="modal-add-chat__btn-container" type="submit">
              {{{Button text="Добавить" onClick=onAddChat}}}
            </div>
        </form>
      </div>
    `;
  }
}
