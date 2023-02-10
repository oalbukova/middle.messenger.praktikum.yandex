// api
import BaseAPI from '../base-api';

// type
import { IDeletedChatInfo, IToken, ICreateChatResponse } from './chats.types';

export class ChatsAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  create(title: string): Promise<ICreateChatResponse> {
    return this.http.post('/', { title });
  }

  delete(id: number): Promise<IDeletedChatInfo> {
    return this.http.delete('/', { chatId: id });
  }

  read(offset = 0, limit = 50, title = ''): Promise<Chat[]> {
    return this.http.get(`?offset=${offset}&limit=${limit}&title=${title}`);
  }

  getUsers(id: number): Promise<User[]> {
    return this.http.get(`/${id}/users`);
  }

  addUsers(id: number, users: number[]) {
    return this.http.put('/users', { chatId: id, users });
  }

  deleteUsers(id: number, users: number[]) {
    return this.http.delete('/users', { chatId: id, users });
  }

  async getToken(id: number): Promise<IToken> {
    return this.http.post(`/token/${id}`);
  }

  update = undefined;
}

export default new ChatsAPI();
