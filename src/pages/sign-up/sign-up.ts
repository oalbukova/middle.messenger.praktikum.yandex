// core
import Block from '../../core/Block';

// types
import { ISignUpPageProps } from './sign-up.types';

// styles
import './sign-up.scss';

export class SignUpPage extends Block {
  constructor({ signUpInputs }: ISignUpPageProps) {
    super({ signUpInputs });
  }
  render() {
    // language=hbs
    return `
      <section class="sign-up">
        <div class="sign-up__image-left"></div>
        <div class="sign-up__image-right"></div>
        <form class="sign-up__form">
          {{{FormTitle formTitle="Регистрация"}}}
          {{#each signUpInputs}}
            {{#with this}}
              {{{Input type="{{type}}" id="{{id}}" name="{{name}}" placeholder="{{placeholder}}" required="{{required}}" errorMsg="{{errorMsg}}" }}}
            {{/with}}
          {{/each}}
          {{{Button text="Зарегистрироваться"}}}
          {{{Link text="Вход" href="/sign-in/"}}}
        </form>
      </section>
    `;
  }
}
