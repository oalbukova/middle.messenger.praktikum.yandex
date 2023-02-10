// api
import API, { AuthAPI } from '../api/auth/auth-api';

// controllers
import ChatsController from './ChatsController';

// core
import { Router, routes, store } from '../core';

// types
import { ISignUpData, ISignInData } from '../api/auth/auth.types';

class AuthController {
  private readonly api: AuthAPI;
  private router: Router;
  constructor() {
    this.api = API;
    this.router = new Router();
  }

  async signin(data: ISignInData) {
    try {
      await this.api.signIn(data);
      await this.getUser();
      await ChatsController.get();
      this.router.go(routes.messenger);
    } catch (err: any) {
      if (err.message == 'User already in system') {
        await this.getUser();
        await ChatsController.get();
        this.router.go(routes.messenger);
      }
      console.error('AuthController.signin error: ', err.message);
    }
  }

  async signup(data: ISignUpData) {
    try {
      await this.api.signUp(data);
      await this.getUser();
      this.router.go(routes.messenger);
    } catch (err: any) {
      console.error('AuthController.signup error: ', err.message);
    }
  }

  async getUser() {
    const user = await this.api.read();
    const reasonText = (user! as any)?.reason;
    if (reasonText) {
      throw new Error(reasonText);
    }
    store.set('currentUser', user);
  }

  async logout() {
    try {
      await this.api
        .logout()
        .then(() => store.set('currentUser', null))
        .then(() => store.set('chats', null))
        .then(() => store.set('messages', null))
        .then(() => store.set('selected', null));
      this.router.go('/');
    } catch (err: any) {
      console.error('AuthController.logout error: ', err.message);
    }
  }
}

export default new AuthController();
