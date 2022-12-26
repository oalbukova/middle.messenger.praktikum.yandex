// core
import Block from '../../core/Block';

// styles
import './search.scss';

export class Search extends Block {
  render() {
    // language=hbs
    return `
      <div class="search">
        <img class="search__icon" src="/static/images/search.svg" alt="поиск"/>
        <input class="search__input" type="search" placeholder="Поиск">
      </div>
    `;
  }
}
