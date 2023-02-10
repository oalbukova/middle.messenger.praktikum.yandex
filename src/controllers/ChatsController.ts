// api
import API, { ChatsAPI } from '../api/chats/chats-api';

// core
import { store, ChatWebSocket } from '../core';

// utils
import { dateFormater } from '../utils';

export class ChatsController {
  private readonly api: ChatsAPI;

  private webSocket: ChatWebSocket | null = null;

  constructor() {
    this.api = API;
  }

  async get(rewrite = false, title = '') {
    try {
      const chatList = await this.api.read(0, 50, title);
      const chats: Record<string, Chat> = {};

      for (const chat of chatList) {
        if (chat.last_message) {
          chat.last_message.time = dateFormater(chat.last_message.time, 'chat');
          chat.last_message.person =
            store.getState().currentUser?.login === chat.last_message.user.login
              ? 'Вы:'
              : '';
        }

        chat.user_list = await this.api.getUsers(chat.id);
        chat.selected = store.getState().selected?.selectedChat === chat.id;
        chats[chat.id] = chat;
      }
      store.set('chats.chatList', chats, rewrite);
    } catch (err: any) {
      console.error('ChatsController.get error: ', err.message);
    }
  }

  async setFoundChats(title: string) {
    try {
      const searchValue = await this.get(true, title);
      store.set('selected.searchValue', title, false);
      return searchValue;
    } catch (err: any) {
      console.error('ChatsController.setFoundChats error: ', err.message);
      return null;
    }
  }

  async create(title: string) {
    try {
      const chat = await this.api.create(title);
      await this.get();
      await this.select(chat.id);
      return chat.id;
    } catch (err: any) {
      console.error('ChatsController.create error: ', err.message);
      return null;
    }
  }

  async getToken(id: number) {
    try {
      const token = await this.api.getToken(id);
      return token.token;
    } catch (err: any) {
      console.error('ChatsController.getToken error: ', err.message);
      return null;
    }
  }

  async getSocket(chatId: number) {
    try {
      if (store.getState().currentUser !== undefined) {
        const userId = store.getState().currentUser?.id;
        const token = await this.getToken(chatId);
        if (userId && chatId && token) {
          this.webSocket = new ChatWebSocket(
            userId.toString(),
            chatId.toString(),
            token
          );
        }
      }
    } catch (err: any) {
      console.error('ChatsController.getSocket error: ', err.message);
    }
  }

  async addUserToChat(id: number, users: number[]) {
    try {
      await this.api.addUsers(id, users);
      await this.get(true);
    } catch (err: any) {
      console.error('ChatsController.addUserToChat error: ', err.message);
    }
  }

  async deleteUserFromChat(id: number, users: number[]) {
    try {
      await this.api.deleteUsers(id, users);
      await this.get(true);
    } catch (err: any) {
      console.error('ChatsController.deleteUserFromChat error: ', err.message);
    }
  }

  select(chatId: number) {
    this.getSocket(chatId).then(() => {
      store.set('selected.selectedChat', chatId);
      this.get(true);
    });
  }

  unselectAll() {
    store.set('socket', null);
    store.set('selected.selectedChat', null, true);
    store.set('selected', null, true);
  }

  async sendMessage(message: string) {
    try {
      if (this.webSocket) {
        this.webSocket.sendMessage(message);
        await this.get();
      }
    } catch (err: any) {
      console.error('ChatsController.sendMessage error: ', err.message);
    }
  }

  async delete(chatId: number) {
    try {
      this.api.delete(chatId).then(async () => {
        this.unselectAll();
        await this.get(true);
      });
    } catch (err: any) {
      console.error('ChatsController.delete error: ', err.message);
    }
  }

  getChatWebSocket() {
    return this.webSocket;
  }
}

export default new ChatsController();
