import { Router } from './router';

describe('./router.ts', () => {
  const router = new Router();

  it('should be once', () => {
    const router2 = new Router();
    expect(router).toStrictEqual(router2);
  });

  it('should add routes', () => {
    const mock: any = jest.fn();
    router.use('/sign-up', mock);
    router.use('/messenger', mock);
    expect(Object.keys(router.routes).length).toEqual(2);
  });

  it('should be started', () => {
    router.start();
    expect(router.isStarted).toStrictEqual(true);
  });
});
