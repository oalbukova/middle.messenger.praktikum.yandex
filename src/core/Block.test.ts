import { Block, Events } from './Block';
import EventBus from './EventBus';

describe('./Block', () => {
  class testBlock extends Block<{ title: string }> {
    render() {
      return '<div></div>';
    }
  }

  it('should create resources on init', () => {
    const block = new testBlock({ title: 'test' });
    block.init();
    expect(block.element).not.toBeNull();
    expect(block.element?.tagName).toEqual('DIV');
  });

  it('set props check', () => {
    const block = new testBlock({ title: 'test' });
    block.setProps({ title: 'new title' });

    expect(block?.props?.title).toEqual('new title');
  });

  it('should emit event FLOW_CDU after props was update', () => {
    const EVENTS = {
      INIT: 'init',
      FLOW_CDM: 'flow:component-did-mount',
      FLOW_CDU: 'flow:component-did-update',
      FLOW_RENDER: 'flow:render',
    };

    const block = new testBlock({ title: 'test' });
    const eventBus = new EventBus<Events>();
    block._registerEvents(eventBus);
    const mock = jest.fn();

    block.eventBus().on(EVENTS.FLOW_CDU, mock);

    block.setProps({ title: 'new title' });

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith(
      { title: 'test' },
      { title: 'new title' }
    );
  });

  it('hide and show content check', () => {
    const block = new testBlock({ title: 'test' });
    block.hide();
    expect(block.getContent().style.display).toStrictEqual('none');
    block.show();
    expect(block.getContent().style.display).toStrictEqual('block');
  });
});
