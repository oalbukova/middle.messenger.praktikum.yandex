// core
import Block from 'core/Block';

// validate
import { validateForm, ValidateType } from 'helpers/validateForm';

// styles
import './sign-in.scss';

export class SignInPage extends Block {
  constructor() {
    super();
    this.setProps({
      onBlur: (e: Event) => {
        const loginRef = this.refs.loginInputRef;
        const passwordRef = this.refs.passwordInputRef;
        const imputEl = e.target as HTMLInputElement;
        const errorLoginMessage = validateForm([
          { type: ValidateType.Login, value: imputEl.value },
        ]);

        const errorPasswordMessage = validateForm([
          { type: ValidateType.Password, value: imputEl.value },
        ]);

        if (imputEl.name === 'login') {
          loginRef.refs.errorRef.setProps({
            text: errorLoginMessage,
          });
          errorLoginMessage
            ? imputEl.classList.add('input_type_error')
            : imputEl.classList.remove('input_type_error');
        }

        if (imputEl.name === 'password') {
          passwordRef.refs.errorRef.setProps({
            text: errorPasswordMessage,
          });
          errorPasswordMessage
            ? imputEl.classList.add('input_type_error')
            : imputEl.classList.remove('input_type_error');
        }
      },

      onSubmit: (e: SubmitEvent) => {
        e.preventDefault();
        const loginEl = this.element?.querySelector(
          'input[name="login"]'
        ) as HTMLInputElement;
        const passwordEl = this.element?.querySelector(
          'input[name="password"]'
        ) as HTMLInputElement;
        const loginRef = this.refs.loginInputRef;
        const passwordRef = this.refs.passwordInputRef;

        const errorLoginMessage = validateForm([
          { type: ValidateType.Login, value: loginEl.value },
        ]);

        const errorPasswordMessage = validateForm([
          { type: ValidateType.Password, value: passwordEl.value },
        ]);

        if (loginEl) {
          loginRef.refs.errorRef.setProps({
            text: errorLoginMessage,
          });
          errorLoginMessage
            ? loginEl.classList.add('input_type_error')
            : loginEl.classList.remove('input_type_error');
        }

        if (passwordEl.name === 'password') {
          passwordRef.refs.errorRef.setProps({
            text: errorPasswordMessage,
          });
          errorPasswordMessage
            ? passwordEl.classList.add('input_type_error')
            : passwordEl.classList.remove('input_type_error');
        }

        if (!errorLoginMessage && !errorPasswordMessage) {
          console.log(
            'form ready to send to API.',
            `login: ${loginEl.value},
            password: ${passwordEl.value}`
          );
          loginEl.value = '';
          passwordEl.value = '';
        }
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
          {{{ControlledInput ref="loginInputRef" type="text"  name="login" placeholder="логин" onBlur=onBlur  }}}
          {{{ControlledInput ref="passwordInputRef" type="password" name="password" placeholder="пароль" onBlur=onBlur }}}
          {{{Button text="Войти" onClick=onSubmit}}}
          {{{Link text="Еще не зарегистрированы?" href="/sign-up" }}}
        </form>
      </section>
    `;
  }
}
