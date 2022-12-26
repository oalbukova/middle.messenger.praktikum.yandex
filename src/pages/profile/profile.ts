// core
import Block from '../../core/Block';

// types
import { IProfilePageProps } from './profile.types';

// styles
import './profile.scss';

export class ProfilePage extends Block {
  constructor({ profileInputs }: IProfilePageProps) {
    super({ profileInputs });
  }
  render() {
    // language=hbs
    return `
      <section class="profile">
        {{{Aside href="/chat-page"}}}
        <div class="profile__image-right"></div>
        <form class="profile__form">
          {{{FormTitle formTitle="Настройки профиля"}}}
          {{{Avatar}}}
          <p class="profile__name">Ольга</p>
          {{#each profileInputs}}
            {{#with this}}
              {{{Input type="{{type}}" id="{{id}}" name="{{name}}" placeholder="{{placeholder}}" value="{{value}}" }}}
            {{/with}}
          {{/each}}
          {{{Button text="Сохранить"}}}
          {{{Link text="Изменить пароль" href="/change-password"}}}
        </form>
      </section>
    `;
  }
}
