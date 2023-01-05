// core
import Block from 'core/Block';

// validate
import { validateForm, ValidateType } from 'helpers/validateForm';

// styles
import './change-password.scss';

export class ChangePasswordPage extends Block {
  constructor() {
    super();
    this.setProps({
      onBlur: () => {
        const oldPasswordEl = this.element?.querySelector(
          'input[name="oldPassword"]'
        ) as HTMLInputElement;
        const newPasswordEl = this.element?.querySelector(
          'input[name="newPassword"]'
        ) as HTMLInputElement;

        const oldPasswordRef = this.refs.oldPassword;
        const newPasswordRef = this.refs.newPassword;

        const errorOldPasswordMessage = validateForm([
          { type: ValidateType.password, value: oldPasswordEl.value },
        ]);

        const errorNewPasswordMessage = 'Пароли не совпадают';

        if (oldPasswordEl) {
          oldPasswordRef.refs.errorRef.setProps({
            text: errorOldPasswordMessage,
          });
          errorOldPasswordMessage
            ? oldPasswordEl.classList.add('input_type_error')
            : oldPasswordEl.classList.remove('input_type_error');
        }

        if (newPasswordEl) {
          if (newPasswordEl.value !== oldPasswordEl.value) {
            newPasswordRef.refs.errorRef.setProps({
              text: errorNewPasswordMessage,
            });
            errorNewPasswordMessage
              ? newPasswordEl.classList.add('input_type_error')
              : newPasswordEl.classList.remove('input_type_error');
          }
        }
      },

      onSubmit: (e: SubmitEvent) => {
        e.preventDefault();

        const oldPasswordEl = this.element?.querySelector(
          'input[name="oldPassword"]'
        ) as HTMLInputElement;
        const newPasswordEl = this.element?.querySelector(
          'input[name="newPassword"]'
        ) as HTMLInputElement;
        const oldPasswordRef = this.refs.oldPassword;
        const newPasswordRef = this.refs.newPassword;

        const errorOldPasswordMessage = validateForm([
          { type: ValidateType.password, value: oldPasswordEl.value },
        ]);

        let errorNewPasswordMessage;

        if (oldPasswordEl) {
          oldPasswordRef.refs.errorRef.setProps({
            text: errorOldPasswordMessage,
          });
          errorOldPasswordMessage
            ? oldPasswordEl.classList.add('input_type_error')
            : oldPasswordEl.classList.remove('input_type_error');
        }

        if (newPasswordEl) {
          if (newPasswordEl.value !== oldPasswordEl.value) {
            errorNewPasswordMessage = 'Пароли не совпадают';
            newPasswordRef.refs.errorRef.setProps({
              text: errorNewPasswordMessage,
            });
            errorNewPasswordMessage
              ? newPasswordEl.classList.add('input_type_error')
              : newPasswordEl.classList.remove('input_type_error');
          }
        }
        if (!errorOldPasswordMessage && !errorNewPasswordMessage) {
          console.log({
            oldPassword: oldPasswordEl.value,
            newPassword: newPasswordEl.value,
          });

          oldPasswordEl.value = '';
          newPasswordEl.value = '';
        }
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
