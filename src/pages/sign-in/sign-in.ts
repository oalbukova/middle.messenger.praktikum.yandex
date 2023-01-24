// core
import Block from 'core/Block';

// controller
import AuthController from '../../controllers/AuthController';

// validate
import { onHandleBlur, onHandleSubmit } from 'helpers/validateForm';

// types
import { ISignInData } from '../../api/auth/auth.types';

// styles
import './sign-in.scss';

export class SignInPage extends Block {
  constructor() {
    super();
    this.setProps({
      onBlur: (e: Event) => onHandleBlur(e, this.refs),
      onSubmit: (e: SubmitEvent) => {
        const data: ISignInData | undefined = onHandleSubmit(e, this.refs);

        data && AuthController.signin(data as ISignInData);
      },
    });
  }

  render() {
    // language=hbs
    return `
      <section class="sign-in">
        <div class="sign-in__image-left"></div>
        <div class="sign-in__image-right"></div>
        <form class="sign-in__form" >
          {{{FormTitle formTitle="Авторизация"}}}
          {{{ControlledInput ref="login"  type="text" name="login" placeholder="логин" onBlur=onBlur }}}
          {{{ControlledInput ref="password"  type="password" name="password" placeholder="пароль" onBlur=onBlur }}}
          {{{Button text="Войти" onClick=onSubmit}}}
          {{{Link text="Еще не зарегистрированы?" href="/sign-up" }}}
        </form>
      </section>
    `;
  }
}
