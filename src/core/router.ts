import { Block } from 'core';
import { renderDOM } from './renderDOM';

export enum routes {
  signIn = '/',
  signUp = '/sign-up',
  messenger = '/messenger',
  settings = '/settings',
  changePassword = '/change-password',
  serverErr = '/server-err',
  notFound = '/not-found',
}

class Route {
  private pathname: string;

  private readonly BlockClass: typeof Block;

  private block: Block | null;

  private props: any;

  constructor(pathname: string, view: typeof Block, props: any) {
    this.pathname = pathname;
    this.BlockClass = view;
    this.block = null;
    this.props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this.block) {
      this.block = null;
    }
  }

  match(pathname: string) {
    return pathname === this.pathname;
  }

  render() {
    if (!this.block) {
      this.block = new this.BlockClass();
    }
    renderDOM(this.props.rootQuery, this.block);
  }
}

export class Router {
  private static __instance: Router;

  public routes: Route[] = [];

  private history = window.history;

  private currentRoute: Route | null = null;

  public isStarted = false;

  constructor() {
    if (Router.__instance) {
      return Router.__instance;
    }

    Router.__instance = this;
  }

  public use(pathname: string, block: typeof Block) {
    try {
      const route = new Route(pathname, block, { rootQuery: '#app' });
      this.routes.push(route);
    } catch (e: any) {
      throw Error(e);
    }
    return this;
  }

  public start() {
    if (!this.isStarted) {
      this.isStarted = true;
      window.onpopstate = () => {
        this._onRoute(window.location.pathname);
      };
      this._onRoute(window.location.pathname);
    }
  }

  public go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  public back() {
    this.history.back();
  }

  public forward() {
    this.history.forward();
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this.currentRoute) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;

    route.render();
  }

  private getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export interface WithRouterProps {
  router: Router;
}

export function withRouter(Component: typeof Block) {
  return class WithRouter extends Component {
    public static componentName = Component.name;

    constructor(props: any) {
      super({ ...props, router: new Router() });
    }
  };
}
