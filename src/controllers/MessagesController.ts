import store from '../core/store';
import WSTransport, { WSTransportEvents } from '../utils/WSTransport';

class MessagesController {
  private sockets: Map<number, WSTransport> = new Map();

  async connect(id: number, token: string) {
    if (this.sockets.has(id)) {
      return;
    }

    const userId = store.getState().currentUser.id;
    const wsTransport = new WSTransport(
      `wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`
    );

    this.sockets.set(id, wsTransport);
    await wsTransport.connect();

    this.subscribe(wsTransport, id);
    this.fetchOldMessages(id);
  }

  public fetchOldMessage(id: number) {
    this.sendSocketMessage(id);
  }

  public sendMessage(message: string) {
    const chatId = store.getState().selectedChat.id;
    this.sendSocketMessage(chatId, message);
  }

  //

  private sendSocketMessage(id: number, message?: string) {
    const socket = this.sockets.get(id);

    if (!socket) {
      throw new Error(`Chat ${id} is not connected`);
    }

    socket.send({
      type: 'message',
      content: message,
    });
  }

  private fetchOldMessages(id: number) {
    const socket = this.sockets.get(id);

    if (!socket) {
      throw new Error(`Chat ${id} is not connected`);
    }

    socket.send({ type: 'get old', content: '0' });
  }

  private subscribe(transport: WSTransport, id: number) {
    transport.on(WSTransportEvents.Message, (message) =>
      this.onMessage(id, message)
    );
    transport.on(WSTransportEvents.Close, () => this.onClose(id));
  }

  private onMessage(id: number, messages: Message | Message[]) {
    let messagesToAdd: Message[] = [];
    if (!Array.isArray(messages) && !messages.user_id) {
      return;
    }

    if (Array.isArray(messages)) {
      messagesToAdd = messages.reverse();
    } else {
      messagesToAdd.push(messages);
    }

    const currentMessages = (store.getState().messages || [])[id] || [];

    messagesToAdd = [...currentMessages, ...messagesToAdd];

    store.set(`messages.${id}`, messagesToAdd);
  }

  private onClose(id: number) {
    this.sockets.delete(id);
  }
}

export default new MessagesController();
