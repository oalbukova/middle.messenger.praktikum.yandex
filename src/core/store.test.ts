import { Store } from './store';

describe('./store.ts', () => {
  it('Allows to set new state', () => {
    const store = new Store();
    store.set('selected', { one: '1' });
    expect(store.getState().selected).toEqual({ one: '1' });
  });
});
