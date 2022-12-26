// core
import Block from '../../core/Block';

// styles
import './change-password.scss';

export class ChangePasswordPage extends Block {
  render() {
    // language=hbs
    return `
      <section class="change-password">
        {{{Aside href="/src/pages/profile/profile.hbs"}}}
        <img class="change-password__image-right" alt="фоновая картинка" src="/static/images/signup-right.png"/>
        <form class="change-password__form">
          {{{FormTitle formTitle="Изменить пароль"}}
          {{#each password.inputs}}
            {{{Input}}}
          {{/each}}
          {{{Button text="Сохранить"}}}
        </form>
      </section>
    `;
  }
}
