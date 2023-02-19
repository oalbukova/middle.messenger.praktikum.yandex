// api
import API, { UserAPI } from '../api/user/user-api';

// controller
import AuthController from './AuthController';

// core
import { Router, routes } from '../core';

// type
import { IUpdatePassword } from '../api/user/user.types';

class UserController {
  private readonly api: UserAPI;
  private router: Router;
  constructor() {
    this.api = API;
    this.router = new Router();
  }

  async search(login: string) {
    try {
      return await this.api.search(login);
    } catch (err: any) {
      console.error('UserController.search error: ', err.message);
    }
  }

  async updateUser(data: User) {
    try {
      await this.api.updateProfile(data);
      await AuthController.getUser();
    } catch (err: any) {
      console.error('UserController.updateUser error: ', err.message);
    }
  }

  async updateAvatar(data: FormData) {
    try {
      await this.api.updateAvatar(data);
      await AuthController.getUser();
    } catch (err: any) {
      console.error('UserController.updateAvatar error: ', err.message);
    }
  }

  async updatePassword(data: IUpdatePassword) {
    try {
      await this.api.updatePassword(data);
      await AuthController.getUser();
      this.router.go(routes.settings);
    } catch (err: any) {
      console.error('UserController.updatePassword error: ', err.message);
    }
  }
}

export default new UserController();
