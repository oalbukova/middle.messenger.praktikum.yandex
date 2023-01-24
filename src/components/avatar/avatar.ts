// core
import Block from 'core/Block';

// types
import { IAvatarProps } from './avvatar.types';

// controllers
import UserController from '../../controllers/UserController';

// core
import { Router } from '../../core';

// images
import avatarImg from '../../../static/images/avatar.png';

// styles
import './avatar.scss';


export class Avatar extends Block {
  static componentName = 'Avatar';

  constructor({ avatar, ...props }: IAvatarProps) {
    super({ ...props });

    this.setProps({
      isAvatar: avatar !== null,
      avatarSrc: `https://ya-praktikum.tech/api/v2/resources/${avatar}`,
      dafaultSrc: avatarImg,
      events: {
        change: (e: Event) => {
          const target= e.target as HTMLInputElement;
          const formData = new FormData();
          target.files && formData.append('avatar', target.files[0]);
          UserController.updateAvatar(formData);
          Router.go('/messenger');
        },
      },
    });
  }

  render() {
    // language=hbs
    return `
      <label class="avatar">
        <input
          id="avatar"
          class="avatar__input"
          type="file"
          name="avatar"
          multiple="false"
          accept=".png, .jpg"
          onChange=change
        />
        {{#if isAvatar}}
          <img class="avatar__img" alt="аватар" src={{this.avatarSrc}}></img>
        {{else}}
          <img class="avatar__img" alt="аватарNull" src={{this.dafaultSrc}}></img>
        {{/if}}
        <div class="avatar__img-hover"></input>
      </div>
    `;
  }
}
