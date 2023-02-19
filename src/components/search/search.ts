// core
import { Block } from 'core';

// types
import { ISearchProps } from './search.types';

// styles
import './search.scss';

export class Search extends Block {
  static componentName = 'Search';
  constructor({ onChange, ...props }: ISearchProps) {
    super({
      ...props,
      events: { input: onChange },
    });
  }
  render() {
    // language=hbs
    return `
      <div class="search">
        <div class="search__icon"></div>
        <input value="{{value}}" type="text" class="search__input" placeholder="Поиск">
      </div>
    `;
  }
}
