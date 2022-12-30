// core
import Block from 'core/Block';

// validate
import { validateForm, ValidateType } from 'helpers/validateForm';

// styles
import './sign-up.scss';

export class SignUpPage extends Block {
  constructor() {
    super();
    this.setProps({
      onBlur: (e: Event) => {
        const imputEl = e.target as HTMLInputElement;
        const firstNameRef = this.refs.firstNameInputRef;
        const secondNameRef = this.refs.secondNameInputRef;
        const loginRef = this.refs.loginInputRef;
        const passwordRef = this.refs.passwordInputRef;
        const emailRef = this.refs.emailInputRef;
        const phoneRef = this.refs.phoneInputRef;

        const errorFirstNameMessage = validateForm([
          { type: ValidateType.FirstName, value: imputEl.value },
        ]);

        const errorSecondNameMessage = validateForm([
          { type: ValidateType.SecondName, value: imputEl.value },
        ]);

        const errorLoginMessage = validateForm([
          { type: ValidateType.Login, value: imputEl.value },
        ]);

        const errorPasswordMessage = validateForm([
          { type: ValidateType.Password, value: imputEl.value },
        ]);

        const errorEmailMessage = validateForm([
          { type: ValidateType.Email, value: imputEl.value },
        ]);

        const errorPhoneMessage = validateForm([
          { type: ValidateType.Phone, value: imputEl.value },
        ]);

        if (imputEl.name === 'first_name') {
          firstNameRef.refs.errorRef.setProps({
            text: errorFirstNameMessage,
          });
          errorFirstNameMessage
            ? imputEl.classList.add('input_type_error')
            : imputEl.classList.remove('input_type_error');
        }

        if (imputEl.name === 'second_name') {
          secondNameRef.refs.errorRef.setProps({
            text: errorSecondNameMessage,
          });
          errorSecondNameMessage
            ? imputEl.classList.add('input_type_error')
            : imputEl.classList.remove('input_type_error');
        }

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
        if (imputEl.name === 'email') {
          emailRef.refs.errorRef.setProps({
            text: errorEmailMessage,
          });
          errorEmailMessage
            ? imputEl.classList.add('input_type_error')
            : imputEl.classList.remove('input_type_error');
        }

        if (imputEl.name === 'phone') {
          phoneRef.refs.errorRef.setProps({
            text: errorPhoneMessage,
          });
          errorPhoneMessage
            ? imputEl.classList.add('input_type_error')
            : imputEl.classList.remove('input_type_error');
        }
      },

      onSubmit: (e: SubmitEvent) => {
        e.preventDefault();

        const firstNameRef = this.refs.firstNameInputRef;
        const secondNameRef = this.refs.secondNameInputRef;
        const loginRef = this.refs.loginInputRef;
        const passwordRef = this.refs.passwordInputRef;
        const emailRef = this.refs.emailInputRef;
        const phoneRef = this.refs.phoneInputRef;
        const firstNameEl = this.element?.querySelector(
          'input[name="first_name"]'
        ) as HTMLInputElement;
        const secondNameEl = this.element?.querySelector(
          'input[name="second_name"]'
        ) as HTMLInputElement;
        const loginEl = this.element?.querySelector(
          'input[name="login"]'
        ) as HTMLInputElement;
        const passwordEl = this.element?.querySelector(
          'input[name="password"]'
        ) as HTMLInputElement;
        const emailEl = this.element?.querySelector(
          'input[name="email"]'
        ) as HTMLInputElement;
        const phoneEl = this.element?.querySelector(
          'input[name="phone"]'
        ) as HTMLInputElement;

        const errorFirstNameMessage = validateForm([
          { type: ValidateType.FirstName, value: firstNameEl.value },
        ]);

        const errorSecondNameMessage = validateForm([
          { type: ValidateType.SecondName, value: secondNameEl.value },
        ]);

        const errorLoginMessage = validateForm([
          { type: ValidateType.Login, value: loginEl.value },
        ]);

        const errorPasswordMessage = validateForm([
          { type: ValidateType.Password, value: passwordEl.value },
        ]);

        const errorEmailMessage = validateForm([
          { type: ValidateType.Email, value: emailEl.value },
        ]);

        const errorPhoneMessage = validateForm([
          { type: ValidateType.Phone, value: phoneEl.value },
        ]);

        if (firstNameEl) {
          firstNameRef.refs.errorRef.setProps({
            text: errorFirstNameMessage,
          });
          errorFirstNameMessage
            ? firstNameEl.classList.add('input_type_error')
            : firstNameEl.classList.remove('input_type_error');
        }

        if (secondNameEl) {
          secondNameRef.refs.errorRef.setProps({
            text: errorSecondNameMessage,
          });
          errorSecondNameMessage
            ? secondNameEl.classList.add('input_type_error')
            : secondNameEl.classList.remove('input_type_error');
        }

        if (loginEl) {
          loginRef.refs.errorRef.setProps({
            text: errorLoginMessage,
          });
          errorLoginMessage
            ? loginEl.classList.add('input_type_error')
            : loginEl.classList.remove('input_type_error');
        }

        if (passwordEl) {
          passwordRef.refs.errorRef.setProps({
            text: errorPasswordMessage,
          });
          errorPasswordMessage
            ? passwordEl.classList.add('input_type_error')
            : passwordEl.classList.remove('input_type_error');
        }
        if (emailEl) {
          emailRef.refs.errorRef.setProps({
            text: errorEmailMessage,
          });
          errorEmailMessage
            ? emailEl.classList.add('input_type_error')
            : emailEl.classList.remove('input_type_error');
        }

        if (phoneEl) {
          phoneRef.refs.errorRef.setProps({
            text: errorPhoneMessage,
          });
          errorPhoneMessage
            ? phoneEl.classList.add('input_type_error')
            : phoneEl.classList.remove('input_type_error');
        }

        if (
          !errorFirstNameMessage &&
          !errorSecondNameMessage &&
          !errorLoginMessage &&
          !errorPasswordMessage &&
          !errorEmailMessage &&
          !errorPhoneMessage
        ) {
          console.log(
            'form ready to send to API.',
            `
            firstName: ${firstNameEl.value},
            secondName: ${secondNameEl.value},
            login: ${loginEl.value},
            password: ${passwordEl.value},
            email: ${emailEl.value},
            phone: ${phoneEl.value}
            `
          );
          firstNameEl.value = '';
          secondNameEl.value = '';
          loginEl.value = '';
          passwordEl.value = '';
          emailEl.value = '';
          phoneEl.value = '';
        }
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
          {{{ControlledInput ref="firstNameInputRef" type="text" name="first_name" placeholder="имя" onBlur=onBlur }}}
          {{{ControlledInput ref="secondNameInputRef" type="text" name="second_name" placeholder="фамилия" onBlur=onBlur }}}
          {{{ControlledInput ref="loginInputRef" type="text" name="login" placeholder="логин" onBlur=onBlur }}}
          {{{ControlledInput ref="emailInputRef" type="email" name="email" placeholder="email" onBlur=onBlur }}}
          {{{ControlledInput ref="passwordInputRef" type="password" name="password" placeholder="пароль" onBlur=onBlur }}}
          {{{ControlledInput ref="phoneInputRef" type="tel" name="phone" placeholder="телефон" onBlur=onBlur }}}
          {{{Button text="Зарегистрироваться" onClick=onSubmit}}}
          {{{Link text="Вход" href="/sign-in"}}}
        </form>
      </section>
    `;
  }
}
