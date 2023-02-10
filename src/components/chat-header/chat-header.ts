// core
import { Block } from 'core';

// styles
import './chat-header.scss';

// utils
import { onModal } from '../../utils';

// image
import avatarImg from '../../../static/images/avatar.png';

export class ChatHeader extends Block {
  static componentName = 'ChatHeader';

  constructor({ ...props }: any) {
    super({
      ...props,
      defaultSrc: avatarImg,
      onOpenModalClick: () => onModal('ModalChat'),
    });
  }

  render() {
    // language=hbs
    return `
      <header class="chat-header">
        <div class="chat-header__info">
          {{#if ${this.props.avatar !== 'null'} }}
            <img class="chat-header__avatar" alt="аватар" src="https://ya-praktikum.tech/api/v2/resources${
              this.props.avatar
            }"/>
          {{else}}
            <img class="chat-header__avatar" alt="аватарNull" src="${
              this.props.defaultSrc
            }"></img>
          {{/if}}
          <div class="chat-header__infoWrapper">
            <p class="chat-header__name">${this.props.title}</p>
            <p class="chat-header__count">участников: ${
              this.props.userCount
            }</p>
          </div>
        </div>
        {{{BtnHeader onClick=onOpenModalClick }}}
        {{{ModalChat id="ModalChat"}}}
      </header>
    `;
  }
}
