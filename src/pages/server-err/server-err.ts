// core
import Block from 'core/Block';

// styles
import './server-err.scss';

export class ServerErrPage extends Block {
  render() {
    // language=hbs
    return `
      <section class="server-err">
        <div class="content">
          <h1 class="content__title">500</h1>
          <p class="content__subtitle">Ошибка сервера</p>
          <p class="content__text">Мы уже работаем над исправлением проблемы, пожалуйста, зайдите чуть позже!</p>
          {{{Link text="на предыдущую страницу" href="/" modificator="contained"}}}
        </div>
        <div  class="server-err__img"/>
      </section>
    `;
  }
}
