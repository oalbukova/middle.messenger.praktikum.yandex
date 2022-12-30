// core
import Block from 'core/Block';

// types
import { IAsideProps } from './aside.types';

// styles
import './aside.scss';

export class Aside extends Block {
  static componentName = 'Aside';

  constructor(props: IAsideProps) {
    super({ ...props });
  }

  render() {
    // language=hbs
    return `
      <div class='aside'>
        <a class='aside__btn' href={{href}}></a>
      </div>
    `;
  }
}
