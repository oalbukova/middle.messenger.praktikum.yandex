// core
import { Block, store } from 'core';

// controllers
import ChatsController from '../../controllers/ChatsController';

// styles
import './modal-delete.scss';

type ModalProps = {
  id: string;
};

export function selectedChat(): number {
  const state = store.getState();
  const currentChat = state.selected!.selectedChat;
  return currentChat!;
}

export class ModalDelete extends Block {
  static componentName = 'ModalDelete';

  constructor({ ...props }: ModalProps) {
    super({
      ...props,

      onDeleteUser: async (e: SubmitEvent) => {
        e.preventDefault();
        const currentChat = selectedChat();
        const userList =
          store.getState().chats?.chatList &&
          store.getState().chats?.chatList?.[currentChat].user_list;
        const delUserId = (
          document.getElementsByName('delUser')[0] as HTMLInputElement
        ).value;
        const user =
          userList?.filter((el: User) => el.login === delUserId).length !== 0 &&
          userList?.filter((el: User) => el.login === delUserId)[0].id;

        if (!user) {
          this.refs.delUser.refs.errorRef.setProps({
            text: 'Такого пользователя нет',
          });
        } else {
          await ChatsController.deleteUserFromChat(currentChat, [user]);
        }
      },
    });
  }

  render() {
    // language=hbs
    return `
      <div class="modal-delete" id="{{id}}">
        <form class="modal-delete__paper">
          <button class="close {{id}}" type="button"></button>
          {{{FormTitle formTitle="Удалить пользователя"}}}
          {{{ControlledInput ref="delUser" type="text" name="delUser" placeholder="логин пользователя" onBlur=onBlur id="delUser" }}}

          <div class="modal-delete__btn-container">
            {{{Button text="Удалить" onClick=onDeleteUser type="submit"}}}
          </div>
        </form>
      </div>
    `;
  }
}
