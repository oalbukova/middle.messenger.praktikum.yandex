import BaseAPI from '../base-api';
import {
  IChatsOption,
  IDeletedChatInfo,
  IToken,
} from './chats.types';

export class ChatsAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  create(title: string) {
    return this.http.post('/', {
      data: { title },
    });
  }

  delete(id: number): Promise<IDeletedChatInfo> {
    return this.http.delete('/', { data: { chatId: id } });
  }

  read(options?: IChatsOption): Promise<Chat[]> {
    return this.http.get('', {
      data: options,
    });
  }

  getUsers(id: number): Promise<Array<User & { role: string }>> {
    return this.http.get(`/${id}/users`);
  }

  addUsers(id: number, users: number[]) {
    return this.http.put('/users', { data: { chatId: id, users } });
  }

  deleteUsers(id: number, users: number[]) {
    return this.http.delete('/users', { data: { chatId: id, users } });
  }

  async getToken(id: number): Promise<string> {
    const res: IToken = await this.http.post(`/token/${id}`);

    return res?.token;
  }

  update = undefined;
}

export default new ChatsAPI();
