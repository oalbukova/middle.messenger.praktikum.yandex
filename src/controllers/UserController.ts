import API, { UserAPI } from '../api/user/user-api';
import {
  IUpdateUser,
  IUpdatePassword,
  ISearchUser,
} from '../api/user/user.types';

import AuthController from './AuthController';
import router from '../core/router';

class UserController {
  private readonly api: UserAPI;

  constructor() {
    this.api = API;
  }

  async search(data: ISearchUser) {
    try {
      const res = await this.api.search(data);
      return res;
    } catch (error: any) {
      console.error('UserController.search error: ', error.message);
    }
  }

  async readUser(id: number) {
    try {
      const res = await this.api.read(id);
      return res;
    } catch (error: any) {
      console.error('UserController.read error: ', error.message);
    }
  }

  async updateUser(data: IUpdateUser) {
    try {
      await this.api.updateProfile(data);
      await AuthController.getUser();
    } catch (error: any) {
      console.error('UserController.updateUser error: ', error.message);
    }
  }

  async updateAvatar(data: FormData) {
    try {
      await this.api.updateAvatar(data);
      await AuthController.getUser();
    } catch (error: any) {
      console.error('UserController.updateAvatar error: ', error.message);
    }
  }

  async updatePassword(data: IUpdatePassword) {
    try {
      await this.api.updatePassword(data);
      await AuthController.getUser();
      router.go('/settings');
    } catch (error: any) {
      console.error('UserController.updatePassword error: ', error.message);
    }
  }
}

export default new UserController();
