import EventBus from './EventBus';
import { set, isEqual } from '../utils';
import { Block } from './Block';

export enum StoreEvents {
  Updated = 'updated',
}

type SelectedInfo = {
  selectedChat?: number;
  searchValue?: string;
};

type StoreData = {
  chats?: {
    chatList?: Chat[];
  };
  currentUser?: User;
  messages?: {
    list?: Message[];
  };
  selected?: SelectedInfo;
};

export class Store extends EventBus {
  private state: StoreData = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown, rewrite = false) {
    set(this.state, path, value, rewrite);

    this.emit(StoreEvents.Updated, this.getState());
  }

  public closeAll() {
    set(this, 'state', '');
  }
}

export const store = new Store();

export const withStore =
  (mapStateToProps: (state: StoreData) => Record<string, unknown>) =>
  (Component: typeof Block) => {
    let state: Record<string, unknown>;
    return class extends Component {
      public static componentName = Component.componentName || Component.name;

      constructor(props: Record<string, unknown>) {
        state = mapStateToProps(store.getState());

        super({ ...props, ...state });

        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState());

          if (!isEqual(state, newState)) {
            this.setProps({
              ...newState,
            });
          }
        });
      }
    };
  };

export const withUser = withStore((state) => ({
  ...state.currentUser,
  ...state.chats,
  ...state.messages,
  ...state.selected,
}));
