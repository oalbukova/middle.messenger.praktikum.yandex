// core
import Block from 'core/Block';

// controller
import AuthController from '../../controllers/AuthController';
import UserController from '../../controllers/UserController';

// types
import { IUpdateUser } from '../../api/user/user.types';

// validate
import { onHandleBlur, onHandleSubmit } from 'helpers/validateForm';

import store from '../../core/store';
import { withStore } from '../../hoc/withStore';

// styles
import './profile.scss';

class ProfilePageBase extends Block {
  constructor() {
    super();
    this.setProps({
      user: store.getState().user,
      onBlur: (e: Event) => onHandleBlur(e, this.refs),
      onSubmit: (e: SubmitEvent) => {
        const data: IUpdateUser | undefined = onHandleSubmit(e, this.refs);
        data && UserController.updateUser(data as IUpdateUser);
      },

      onLogout: () => AuthController.logout(),
    });
  }

  render() {
    // language=hbs
    return `
      <section class="profile">
        {{{Aside href="messenger"}}}
        <div class="profile__image-right"></div>
        <div class="profile__form-wrapper">
          <form class="profile__form">
            {{{FormTitle formTitle="Настройки профиля"}}}
            {{{Avatar avatar=user.avatar}}}
            <p class="profile__name">{{user.first_name}}</p>
            {{{ControlledInput value=user.first_name ref="first_name" type="text" name="first_name" placeholder="имя" onBlur=onBlur }}}
            {{{ControlledInput value=user.second_name ref="second_name" type="text" name="second_name" placeholder="фамилия" onBlur=onBlur }}}
            {{{ControlledInput value=user.display_name ref="display_name" type="text" name="display_name" placeholder="ник" onBlur=onBlur }}}
            {{{ControlledInput value=user.login ref="login" type="text" name="login" placeholder="логин" onBlur=onBlur }}}
            {{{ControlledInput value=user.email ref="email" type="email" name="email" placeholder="email" onBlur=onBlur }}}
            {{{ControlledInput value=user.phone ref="phone" type="tel" name="phone" placeholder="телефон" onBlur=onBlur }}}
            {{{Button text="Сохранить" onClick=onSubmit}}}
            {{{Link text="Изменить пароль" href="/change-password"}}}
          </form>
          {{{Button text="Выйти" modificator="outlined" onClick=onLogout}}}
        </div>
      </section>
    `;
  }
}

const withUser = withStore((state) => ({ ...state.user }));
export const ProfilePage = withUser(ProfilePageBase);
