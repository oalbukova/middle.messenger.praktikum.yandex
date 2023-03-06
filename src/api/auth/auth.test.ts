import HTTPTransport from '../../core/http-transport';

describe('api/auth-api', () => {
  const testRequest = new HTTPTransport('/auth');
  it('Checking error auth', async () => {
    try {
      await testRequest.post('/signin', {
        data: { login: '', password: '' },
      });
    } catch (err) {
      // @ts-ignore
      const reason = JSON.parse(err).reason;
      expect(reason).toEqual('login is empty, but required');
    }
  });

  it('Checking get user info', async () => {
    try {
      await testRequest.get('/user');
      // @ts-ignore
      expect(response.status).toEqual(200);
    } catch (err) {
      console.log(err);
    }
  });
});
