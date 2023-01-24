// core
import Block from './Block';

// pages
import { NotFoundPage } from '../pages';

function isEqual(lhs: string, rhs: string): boolean {
  return lhs === rhs;
}

function render(query: string, block: Block) {
  const root = document.querySelector(query);
  if (root === null) {
    throw new Error(`root not found by selector "${query}"`);
  }
  root.textContent = '';
  root.append(block.getContent()!);
  return root;
}

class Route {
  private _block: Block | null = null;

  constructor(
    private _pathname: string,
    private _view: typeof Block,
    private readonly _rootQuery: string
  ) {}

  public navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  public leave() {
    if (this._block) {
      this._block = null;
    }
  }

  public match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  public render() {
    if (!this._block) {
      this._block = new this._view({});
      render(this._rootQuery, this._block);
      return;
    }

   // this._block.show();
  }
}

class Router {
  private static _instance: Router;
  private _routes: Route[] = [];
  private _history = window.history;
  private _currentRoute: Route | null = null;

  constructor(private readonly _rootQuery: string) {
    if (Router._instance) {
      return Router._instance;
    }
  }

  public use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, this._rootQuery);
    this._routes.push(route);
    return this;
  }

  public start() {
    window.onpopstate = ((event: PopStateEvent) => {
      const eventTarget = event.currentTarget as Window;
      this._onRoute(eventTarget.location.pathname);
    }).bind(this);

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      const notFoundPage = new Route(
        '/not-found',
        NotFoundPage,
        this._rootQuery
      );
      notFoundPage.render();
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  go(pathname: string) {
    this._history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this._history.back();
  }

  forward() {
    this._history.forward();
  }

  getRoute(pathname: string) {
    return this._routes.find((route) => route.match(pathname));
  }
}

const router = new Router('#app');
export default router;
