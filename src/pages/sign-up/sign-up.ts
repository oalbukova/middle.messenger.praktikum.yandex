// core
import { Block } from 'core';

// controller
import AuthController from '../../controllers/AuthController';

// validate
import { onHandleSubmit, onHandleBlur } from 'helpers/validateForm';

// types
import { ISignUpData } from '../../api/auth/auth.types';

// styles
import './sign-up.scss';

export class SignUpPage extends Block {
  constructor() {
    super({});
    this.setProps({
      onBlur: (e: Event) => onHandleBlur(e, this.refs),

      onSubmit: (e: SubmitEvent) => {
        const data: ISignUpData | undefined = onHandleSubmit(e, this.refs);
        data && AuthController.signup(data as ISignUpData);
      },
    });
  }

  render() {
    // language=hbs
    return `
      <section class="sign-up">
        <div class="sign-up__image-left"></div>
        <div class="sign-up__image-right"></div>
        <form class="sign-up__form">
          {{{FormTitle formTitle="Регистрация"}}}
          {{{ControlledInput ref="first_name" type="text" name="first_name" placeholder="имя" onBlur=onBlur }}}
          {{{ControlledInput ref="second_name" type="text" name="second_name" placeholder="фамилия" onBlur=onBlur }}}
          {{{ControlledInput ref="login" type="text" name="login" placeholder="логин" onBlur=onBlur }}}
          {{{ControlledInput ref="email" type="email" name="email" placeholder="email" onBlur=onBlur }}}
          {{{ControlledInput ref="password" type="password" name="password" placeholder="пароль" onBlur=onBlur }}}
          {{{ControlledInput ref="phone" type="tel" name="phone" placeholder="телефон" onBlur=onBlur }}}
          {{{Button text="Зарегистрироваться" onClick=onSubmit}}}
          {{{Link text="Вход" href="/"}}}
        </form>
      </section>
    `;
  }
}
