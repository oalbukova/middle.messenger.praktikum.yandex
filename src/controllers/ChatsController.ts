import API, { ChatsAPI } from '../api/chats/chats-api';
import { ISearchUser } from '../api/user/user.types';
import store, { StoreEvents } from '../core/store';
import MessagesController from './MessagesController';
import UserController from './UserController';

export class ChatsController {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = API;
  }

  async create(title: string) {
    await this.api.create(title);

    await this.fetchChats();
  }

  async fetchChats() {
    let chats: any;

    try {
      chats = await this.api.read();

      const reasonText = chats.reason;

      if (reasonText) {
        throw new Error(reasonText);
      }

      chats.map(async (chat: Chat) => {
        const token = await this.getToken(chat.id);

        await MessagesController.connect(chat.id, token);
      });

      delete store.getState().chats;

      store.set('chats', chats, StoreEvents.ChatsUpdated);
    } catch (error) {
      console.log(error);
    }
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
    store.set('selectedChat', null, StoreEvents.SelectedChatUpdated);
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  async setSelectedChat(chatInfo: Chat) {
    const selectedChat = {
      id: chatInfo.id,
      title: chatInfo.title,
      avatar: chatInfo.avatar,
      users: await this.getChatUsers(chatInfo.id),
    };
    delete store.getState().selectedChat;
    store.set('selectedChat', selectedChat, StoreEvents.SelectedChatUpdated);
  }

  async setSelectedUsers(data: ISearchUser) {
    const selectedUser = await UserController.search(data);

    store.set('selectedUser', selectedUser![0]);
  }

  async addChatAvatar(id: number, avatarFormData: FormData) {
    avatarFormData.append('chatId', id.toString());
    const { avatar } = await this.api.addChatAvatar(avatarFormData);

    await this.fetchChats();
    store.set('selectedChat.avatar', avatar, StoreEvents.SelectedChatUpdated);
  }

  async setFoundChats(title: string) {
    await this.fetchChats();

    if (!title) {
      return;
    }

    const chats = store.getState().chats;
    const foundChats = chats.filter((chat: Chat) => chat.title.includes(title));
    delete store.getState().chats;
    store.set('chats', foundChats, StoreEvents.ChatsUpdated);
    console.log(store.getState().chats);
  }

  async updateSelectedChatUser(type: 'addUsers' | 'deleteUsers') {
    const selectChatId = store.getState().selectedChat.id;
    const selectedUserId = store.getState().selectedUser.id;

    await this.api[type](selectChatId, [selectedUserId]);

    const selectedChatUser = await this.getChatUsers(selectChatId);
    delete store.getState().selectedChat.users;
    store.set(
      'selectedChat.users',
      selectedChatUser,
      StoreEvents.SelectedChatUpdated
    );
  }

  async getChatUsers(idChat: number) {
    const chatUsers = await this.api.getUsers(idChat);
    const currentUserId = store.getState().currentUser.id;
    const chatUsersWithoutCurrentUser = chatUsers.filter(
      (user) => user.id !== currentUserId
    );

    return chatUsersWithoutCurrentUser;
  }
}

export default new ChatsController();
