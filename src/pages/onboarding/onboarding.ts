// core
import Block from 'core/Block';

// styles
import './onboarding.scss';

// types
import { IOnboardingPageProps } from './onboarding.types';

export class OnboardingPage extends Block {
  constructor({ links }: IOnboardingPageProps) {
    super({ links });
  }
  render() {
    // language=hbs
    return `
      <nav>
        <ul class="list">
          {{#each links}}
            {{#with this}}
              {{{MainLink title="{{title}}" href="{{href}}"}}}
            {{/with}}
          {{/each}}
        </ul>
      </nav>
    `;
  }
}
