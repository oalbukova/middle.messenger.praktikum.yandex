// core
import Block from 'core/Block';

// styles
import './not-found.scss';

export class NotFoundPage extends Block {
  render() {
    
    // language=hbs
    return `
      <section class="not-found">
        <div class="not-found__content">
          <div class="text-container">
            <h1 class="text-container__title">Страница не найдена</h1>
            {{{Link text="на предыдущую страницу" href="/" modificator="outlined"}}}
          </div>
        </div>
      </section>
    `;
  }
}
