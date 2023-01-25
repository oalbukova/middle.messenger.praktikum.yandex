import EventBus from './EventBus';
import { set } from '../utils';

export enum StoreEvents {
  Updated = 'updated',
  MessagesUpdated = 'messages-updated',
  SelectedChatUpdated = 'selectedChat-updated',
  UserUpdated = 'user-updated',
  ChatsUpdated = 'chats-updated',
}

export class Store extends EventBus {
  private state: any = {};

  public set(keypath: string, data: unknown, emitName?: string) {
    const newState = set(this.state, keypath, data);
    if (newState) {
      this.state = newState;
    }

    this.emit(emitName ?? StoreEvents.Updated);
  }

  public getState() {
    return this.state;
  }

  public clearState() {
    this.state = {};
  }
}

const store = new Store();

export default store;
