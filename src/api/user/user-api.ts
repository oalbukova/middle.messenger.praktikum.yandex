import BaseAPI from '../base-api';

import { IUpdateUser, IUpdatePassword, ISearchUser } from './user.types';

export class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  search(data: ISearchUser): Promise<User[]> {
    return this.http.post('/search', { data });
  }

  updateAvatar(data: FormData): Promise<User> {
    return this.http.put('/profile/avatar', { data });
  }

  updateProfile(data: IUpdateUser): Promise<User> {
    return this.http.put('/profile', { data });
  }

  read(id: number): Promise<User> {
    return this.http.get('/user/' + id);
}


  updatePassword(data: IUpdatePassword) {
    return this.http.put('/password', { data });
  }


  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new UserAPI();
