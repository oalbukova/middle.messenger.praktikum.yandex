// core
import { Block, store } from 'core';

// controller
import ChatsController from '../../controllers/ChatsController';

// svg
import imgOne from '../../../static/images/plus.svg';
import imgTwo from '../../../static/images/del-user.svg';
import imgThree from '../../../static/images/delete.svg';

// utils
import { onModal } from '../../utils';

// styles
import './modal-chat.scss';

type ModalProps = {
  id: string;
};

export function selectedDelChat(): number {
  const state = store.getState();
  const currentChat = state.selected!.selectedChat;
  return currentChat!;
}

export class ModalChat extends Block {
  static componentName = 'ModalChat';

  constructor({ ...props }: ModalProps) {
    super({
      ...props,
      imgOne: imgOne,
      imgTwo: imgTwo,
      imgThree: imgThree,
      onDelChat: () => {
        const currentChat = selectedDelChat();
        ChatsController.delete(currentChat!);
      },

      onOpenAddModal: () => {
        onModal('ModalAdd');
        const modal = document.getElementById('ModalChat') as HTMLElement;
        modal.style.display = 'none';
      },
      onOpenDelModal: () => {
        onModal('ModalDelete');
        const modal = document.getElementById('ModalChat') as HTMLElement;
        modal.style.display = 'none';
      },
    });
  }

  render() {
    // language=hbs
    return `
      <ul class="modal-chat" id="{{id}}">
        {{{ModalButton title="Добавить пользователя" src="${this.props.imgOne}" onClick=onOpenAddModal}}}
        {{{ModalButton title="Удалить пользователя" src="${this.props.imgTwo}" modificator="del" onClick=onOpenDelModal}}}
        {{{ModalButton title="Удалить чат" src="${this.props.imgThree}" onClick=onDelChat}}}
      </ul>
    `;
  }
}
