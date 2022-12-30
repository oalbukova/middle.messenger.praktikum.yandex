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
      onInput: (e: Event) => {
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

        const errorMessage = validateForm([
          { type: ValidateType.Login, value: loginEl.value },
          { type: ValidateType.Password, value: passwordEl.value },
        ]);

        if (!errorMessage) {
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
          {{{ControlledInput ref="loginInputRef" type="text"  name="login" placeholder="логин" onBlur=onBlur onInput=onInput }}}
          {{{ControlledInput ref="passwordInputRef" type="password" name="password" placeholder="пароль" onBlur=onBlur onInput=onInput}}}
          {{{Button text="Войти" onClick=onSubmit}}}
          {{{Link text="Еще не зарегистрированы?" href="/sign-up" }}}
        </form>
      </section>
    `;
  }
}
