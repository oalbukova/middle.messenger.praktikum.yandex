import EventBus from './EventBus';
import { store } from './store';
import { dateFormater, isPlainObject } from '../utils';

enum MessageType {
  MESSAGE = 'message',
}

export interface SocketData {
  socketUserId: string;
  socketChatId: string;
  socketToken: string;
}

export class ChatWebSocket {
  static WSTransportEvents = {
    CONNECTED: 'connected',
    CLOSE: 'close',
    MESSAGE: 'message',
    ERROR: 'error',
  };

  static WEB_SOCKET_URL = 'wss://ya-praktikum.tech/ws/chats';

  protected endpoint: string;

  protected socket: WebSocket;

  protected eventBus: () => EventBus;

  constructor(userId: string, chatId: string, token: string) {
    const eventBus = new EventBus();
    this.eventBus = () => eventBus;
    this.endpoint = `${ChatWebSocket.WEB_SOCKET_URL}/${userId}/${chatId}/${token}`;
    this.socket = new WebSocket(this.endpoint);
    this._addSocketEventListeners();
    this._registerEvents(eventBus);
  }

  private _registerEvents(eventBus: EventBus): void {
    eventBus.on(
      ChatWebSocket.WSTransportEvents.CONNECTED,
      this._open.bind(this)
    );
    eventBus.on(
      ChatWebSocket.WSTransportEvents.MESSAGE,
      this._message.bind(this)
    );
  }

  private _open() {
    console.log('Соединение установлено');
    this._autoPing();
    this.getMessages();
    this.getPing();
  }

  private _message(data: unknown) {
    if (Array.isArray(data)) {
      data = data.reverse().map((message) => {
        if (message.time) {
          message.timeInfo = dateFormater(message.time, 'message');
          message.day = dateFormater(message.time, 'chat');
        }
        message.isMine = store.getState().currentUser?.id === message.user_id;
        return message;
      });
      store.set('messages', { list: data as [] }, true);
    } else if (isPlainObject(data) && data.type && data.type === 'message') {
      this.getMessages();
    }
  }

  private _addSocketEventListeners() {
    this.socket.addEventListener('open', () => {
      this.eventBus().emit(ChatWebSocket.WSTransportEvents.CONNECTED);
    });

    this.socket.addEventListener('close', (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }
      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
      this.eventBus().emit(ChatWebSocket.WSTransportEvents.CLOSE);
    });

    this.socket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      if (data.type && data.type === 'pong') {
        return;
      }
      this.eventBus().emit(ChatWebSocket.WSTransportEvents.MESSAGE, data);
    });

    this.socket.addEventListener('error', (event) => {
      console.log('Ошибка', event);
      this.eventBus().emit(ChatWebSocket.WSTransportEvents.ERROR);
    });
  }

  public sendMessage(content: string, type: MessageType = MessageType.MESSAGE) {
    this.socket.send(
      JSON.stringify({
        content,
        type,
      })
    );
  }

  public getMessages(start = '0') {
    this.socket.send(
      JSON.stringify({
        content: start,
        type: 'get old',
      })
    );
  }

  public close() {
    this.socket.close();
  }

  public getPing() {
    this.socket.send(
      JSON.stringify({
        content: '',
        type: 'ping',
      })
    );
  }

  private _autoPing() {
    this.getPing();
    setTimeout(() => this._autoPing(), 10000);
  }
}
