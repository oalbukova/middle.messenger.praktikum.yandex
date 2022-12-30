// core
import Block from 'core/Block';

// types
import { IChangePasswordProps } from './change-password.types';

// styles
import './change-password.scss';

export class ChangePasswordPage extends Block {
  constructor({ passwordInputs }: IChangePasswordProps) {
    super({ passwordInputs });
  }
  render() {
    // language=hbs
    return `
      <section class="change-password">
        {{{Aside href="/profile"}}}
        <div class="change-password__image-right"></div>
        <form class="change-password__form">
          {{{FormTitle formTitle="Изменить пароль"}}}
          {{#each passwordInputs}}
            {{#with this}}
              {{{Input type="{{type}}" id="{{id}}" name="{{name}}" placeholder="{{placeholder}}" required="{{required}}" errorMsg="{{errorMsg}}" }}}
            {{/with}}
          {{/each}}
          {{{Button text="Сохранить"}}}
        </form>
      </section>
    `;
  }
}
