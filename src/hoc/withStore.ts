import { Block, store, StoreEvents } from 'core';
import { isEqual } from '../utils';

interface IState {
  user: User;
  chats: Chat[];
  messages: Record<number, Message[]>;
  selectedChat?: number;
}

export function withStore(mapStateToProps: (state: IState) => any) {
  return function wrap(Component: typeof Block) {
    return class extends Component {
      constructor(props: any) {
        let state = mapStateToProps(store.getState());

        super({ ...props, ...state });

        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState());

          if (!isEqual(state, newState)) {
            this.setProps({ ...newState });
          }

          state = newState;
        });
      }
    };
  };
}

