// core
import Block from 'core/Block';

// validate
import { onHandleSubmit, onHandleBlur } from 'helpers/validateForm';

// controller
import UserController from '../../controllers/UserController';

// types
import { IUpdatePassword } from '../../api/user/user.types';

// styles
import './change-password.scss';

export class ChangePasswordPage extends Block {
  constructor() {
    super();
    this.setProps({
      onBlur: (e: Event) => onHandleBlur(e, this.refs),

      onSubmit: (e: SubmitEvent) => {
        const data: IUpdatePassword | undefined = onHandleSubmit(e, this.refs);
      
        data && UserController.updatePassword(data as IUpdatePassword);
      },
    });
  }

  render() {
    // language=hbs
    return `
      <section class="change-password">
        {{{Aside href="/settings"}}}
        <div class="change-password__image-right"></div>
        <form class="change-password__form">
          {{{FormTitle formTitle="Изменить пароль"}}}
          {{{ControlledInput ref="oldPassword" type="password" name="oldPassword" placeholder="старый пароль" onBlur=onBlur }}}
          {{{ControlledInput ref="newPassword" type="password" name="newPassword" placeholder="новый пароль" onBlur=onBlur }}}
          {{{Button text="Сохранить" onClick=onSubmit}}}
        </form>
      </section>
    `;
  }
}
