import EventBus from './EventBus';
import { set } from '../utils';

export enum StoreEvents {
  Updated = 'updated',
}

class Store extends EventBus {
  private state: any = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(StoreEvents.Updated, this.getState());
  }

  public clearState() {
    this.state = {};
  };
}

const store = new Store();

export default store;

