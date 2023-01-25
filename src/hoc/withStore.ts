import { Block } from '../core';
import store, { StoreEvents } from '../core/store';
import { isEqual } from '../utils';
interface State {
  user: User;
  chats: Chat[];
  messages: Record<number, Message[]>;
  // selectedChat?: number;
  // searchUser?: User[];
  // modal?: string;
}

export function withStore(
  mapStateToProps: (state: State) => Record<string, unknown>,
  nameStoreEvent: any = StoreEvents.Updated,
  isForceSetProps = false
) {
  return function wrap(Component: typeof Block) {
    let previousState: any = {};
    return class WithStore extends Component {
      // public static componentName = Component.name || Component.componentName;

      constructor(props: any) {
        previousState = mapStateToProps(store.getState());

        super({ ...props, ...previousState });

        store.on(nameStoreEvent, this.storeEventHandler);
      }

      storeEventHandler = () => {
        const newState = mapStateToProps(store.getState());

        if (!isEqual(previousState, newState) || isForceSetProps) {
          previousState = newState;
          this.setProps({
            ...newState,
          });
        }
      };

      componentDidUnmount(): void {
        store.off(nameStoreEvent, this.storeEventHandler);
      }
    };
  };
}
