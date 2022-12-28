// core
import Block from '../../core/Block';

// styles
import './search.scss';

export class Search extends Block {
  render() {
    // language=hbs
    return `
      <div class="search">
        <div class="search__icon"></div>
        <input class="search__input" type="search" placeholder="Поиск">
      </div>
    `;
  }
}
