// core
import { Block, store } from 'core';

// controllers
import ChatsController from '../../controllers/ChatsController';
import UserController from '../../controllers/UserController';

// styles
import './modal-add.scss';

type ModalProps = {
  id: string;
};

export function selectedAddChat(): number {
  const state = store.getState();
  const currentChat = state.selected!.selectedChat;
  return currentChat!;
}

export class ModalAdd extends Block {
  static componentName = 'ModalAdd';

  constructor({ ...props }: ModalProps) {
    super({
      ...props,

      onAddUser: async (e: SubmitEvent) => {
        e.preventDefault();
        const currentChat = selectedAddChat();
        const AddUserName = (
          document.getElementsByName('addUser')[0] as HTMLInputElement
        ).value;
        const AddUserData = await UserController.search(AddUserName);

        const AddUserId = AddUserData && AddUserData[0].id;
        if (AddUserId === undefined) {
          this.refs.addUser.refs.errorRef.setProps({
            text: 'Такого пользователя нет',
          });
        }
        if (AddUserId) {
          await ChatsController.addUserToChat(currentChat, [AddUserId]);
        }
      },
    });
  }

  render() {
    // language=hbs
    return `
      <div class="modal-add" id="{{id}}">
        <form class="modal-add__paper">
          <button class="close {{id}}" type="button"></button>
          {{{FormTitle formTitle="Добавить пользователя"}}}
          {{{ControlledInput ref="addUser" type="text" name="addUser" placeholder="логин пользователя" onBlur=onBlur id="addUser" }}}
          <div class="modal-add__btn-container">
            {{{Button text="Добавить" onClick=onAddUser type="submit"}}}
          </div>
        </form>
      </div>
    `;
  }
}
