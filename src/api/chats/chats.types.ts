export interface IChatsOption {
  offset?: number;
  limit?: number;
  title?: string;
}

export interface IToken {
  token: string;
}

export interface IDeletedChatInfo {
  userId: number;
  result: {
    id: number;
    title: string;
    avatar: string;
  };
}

export interface ICreateChatResponse {
  id: number;
}
