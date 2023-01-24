import API, { ChatsAPI } from '../api/chats/chats-api';
import store from '../core/store';
import MessagesController from './MessagesController';

class ChatsController {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = API;
  }

  async create(title: string) {
    await this.api.create(title);

    await this.fetchChats();
  }

  async fetchChats() {
    const chats = await this.api.read();

    chats.map(async (chat: Chat) => {
      const token = await this.getToken(chat.id);

      await MessagesController.connect(chat.id, token);
    });
    store.set('chatList', chats);
  }

  async addUserToChat(id: number, userId: number) {
    this.api.addUsers(id, [userId]);
    await this.fetchChats();
  }

  async deleteUserFromChat(id: number, userId: number) {
    await this.api.deleteUsers(id, [userId]);
    this.fetchChats();
  }

  async delete(id: number) {
    await this.api.delete(id);

    this.fetchChats();
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  selectChat(id: number | string) {
    store.set('selectedChat', id);
  }

  selectTitle(title: string) {
    store.set('selectedTitle', title);
  }

  selectAvatar(avatar: string) {
    store.set('selectedAvatar', avatar);
  }
}

export default new ChatsController();
