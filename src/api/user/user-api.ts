// api
import BaseAPI from '../base-api';

//core
import { ContentType } from '../../core';

// types
import { IUpdatePassword } from './user.types';

export class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  search(login: string): Promise<User[]> {
    return this.http.post('/search', { login });
  }

  updateAvatar(data: FormData): Promise<User> {
    return this.http.put('/profile/avatar', data, ContentType.formData);
  }
  updateProfile(data: User): Promise<User> {
    return this.http.put('/profile', data);
  }

  updatePassword(data: IUpdatePassword) {
    return this.http.put('/password', data);
  }

  read = undefined;
  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new UserAPI();
