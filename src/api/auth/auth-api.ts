import BaseAPI from '../base-api';
import { ISignUpData, ISignInData,ISignUpResponse } from './auth.types';

export class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  signUp(data: ISignUpData): Promise<ISignUpResponse> {
    return this.http.post('/signup', { data });
  }

  signIn(data: ISignInData) {
    return this.http.post('/signin', { data });
  }

  read(): Promise<User> {
    return this.http.get('/user');
  }

  logout() {
    return this.http.post('/logout');
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new AuthAPI();
