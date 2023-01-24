import API, { AuthAPI } from '../api/auth/auth-api';
import { ISignUpData, ISignInData } from '../api/auth/auth.types';
import router from '../core/router';
import store from '../core/store';

class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: ISignInData) {
    try {
      await this.api.signIn(data);
      await this.getUser();
      router.go('/messenger');
    } catch (error: any) {
      if (error.message == 'User already in system') {
        router.go('/messenger');
      }
      console.error('AuthController.signin error: ', error.message);
    }
  }

  async signup(data: ISignUpData) {
    try {
      await this.api.signUp(data);
      await this.getUser();
      router.go('/messenger');
    } catch (error: any) {
      console.error('AuthController.signup error: ', error.message);
    }
  }

  async getUser() {
    const user = await this.api.read();
    const reasonText = (user! as any)?.reason;
    if (reasonText) {
      throw new Error(reasonText);
    }
    store.set('user', user);
  }

  async logout() {
    try {
      await this.api.logout();
      router.go('/');
      store.clearState();
    } catch (error: any) {
      console.error('AuthController.logout error: ', error.message);
    }
  }
}

export default new AuthController();
