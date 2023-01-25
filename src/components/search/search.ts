// core
import Block from 'core/Block';

// types
import { ISearchProps } from './search.types';

// styles
import './search.scss';

export class Search extends Block {
  static componentName = 'Search';
  constructor({ onInputSearchChat, ...props }: ISearchProps) {
    super({
      ...props,
      events: { input: onInputSearchChat },
    });
  }
  render() {
    // language=hbs
    return `
      <div class="search">
        <div class="search__icon"></div>
        <input class="search__input" type="search" placeholder="Поиск"  autocomplete="off">
      </div>
    `;
  }
}
