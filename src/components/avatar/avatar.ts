// core
import Block from 'core/Block';

// styles
import './avatar.scss';

export class Avatar extends Block {
  static componentName = "Avatar";

  render() {
    // language=hbs
    return `
      <div class="avatar">
        <div class="avatar__img"></div>
        <div class="avatar__img-hover"></input>
      </div>
    `;
  }
}
