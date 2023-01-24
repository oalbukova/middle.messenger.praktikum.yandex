declare global {
  export type Nullable<T> = T | null;
  export type Keys<T extends Record<string, unknown>> = keyof T;
  export type Values<T extends Record<string, unknown>> = T[Keys<T>];

  export type AppState = {
    appIsInited: boolean;
    screen: Screens | null;
    isLoading: boolean;
    loginFormError: string | null;
    registerFormError: string | null;
    profileFormError: string | null;
    changePasswordFormError: string | null;
    user: User | null;
    chats: Array<Chat>;
    users: Array<User>;
    messages: Array<Message>;
    token: string | null;
    intervalId: number | null;
    socket: WebSocket | null;
    firstMessage: number;
  };

  export type User = {
    id: number;
    login: string;
    first_name: string;
    second_name: string;
    display_name: string;
    avatar: string;
    phone: string;
    email: string;
  };

  export type Chat = {
    id: number;
    title: string;
    avatar: string | null;
    created_by: number;
    unread_count: number;
    last_message: {
      user: User;
      time: string;
      content: string;
      id: number;
    };
  };

  export type Message = {
    chat_id: number;
    time: string;
    type: string;
    user_id: number;
    content: string;
    file?: {
      id: number;
      user_id: number;
      path: string;
      filename: string;
      content_type: string;
      content_size: number;
      upload_date: string;
    };
  };
}

export {};
