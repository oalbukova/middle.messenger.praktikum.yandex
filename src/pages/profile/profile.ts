// core
import Block from 'core/Block';

// validate
import { onHandleBlur, onHandleSubmit } from 'helpers/validateForm';

// styles
import './profile.scss';

export class ProfilePage extends Block {
  constructor() {
    super();
    this.setProps({
      onBlur: (e: Event) => onHandleBlur(e, this.refs),
      onSubmit: (e: SubmitEvent) => onHandleSubmit(e, this.refs),
    });
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
          {{{ControlledInput ref="first_name" type="text" name="first_name" placeholder="имя" }}}
          {{{ControlledInput ref="second_name" type="text" name="second_name" placeholder="фамилия" }}}
          {{{ControlledInput ref="display_name" type="text" name="display_name" placeholder="ник" }}}
          {{{ControlledInput ref="login" type="text" name="login" placeholder="логин" }}}
          {{{ControlledInput ref="email" type="email" name="email" placeholder="email" }}}
          {{{ControlledInput ref="phone" type="tel" name="phone" placeholder="телефон" }}}
          {{{Button text="Сохранить" onClick=onSubmit}}}
          {{{Link text="Изменить пароль" href="/change-password"}}}
        </form>
      </section>
    `;
  }
}
