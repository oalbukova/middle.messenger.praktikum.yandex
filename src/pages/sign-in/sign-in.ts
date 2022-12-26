// core
import Block from '../../core/Block';

// types
import { ISignInPageProps } from './sign-in.types';

// styles
import './sign-in.scss';

export class SignInPage extends Block {
  constructor({ inputs }: ISignInPageProps) {
    super({ inputs });
  }

  render() {
    // language=hbs
    return `
      <section class="sign-in">
        <div class="sign-in__image-left"></div>
        <div class="sign-in__image-right"></div>
        <form class="sign-in__form">
          {{{FormTitle formTitle="Авторизация"}}}
          {{#each inputs}}
            {{#with this}}
              {{{Input type="{{type}}" id="{{id}}" name="{{name}}" placeholder="{{placeholder}}" required="{{required}}" errorMsg="{{errorMsg}}" }}}
            {{/with}}
          {{/each}}
          {{{Button text="Войти"}}}
          {{{Link text="Еще не зарегистрированы?" href="/sign-up" }}}
        </form>
      </section>
    `;
  }
}
