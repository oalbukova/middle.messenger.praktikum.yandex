declare global {
  export type Nullable<T> = T | null;
  export type Keys<T extends Record<string, unknown>> = keyof T;
  export type Values<T extends Record<string, unknown>> = T[Keys<T>];

  export type User = {
    avatar: string;
    display_name?: string;
    email: string;
    first_name: string;
    id?: number;
    login: string;
    phone: string;
    second_name: string;
    role?: string;
  };

  export type Chat = {
    avatar: string;
    created_by: number;
    id: number;
    last_message: {
      content: string;
      person?: string | undefined;
      user: User;
      time: string | null;
    };
    selected?: boolean;
    title: string;
    unread_count: number;
    user_list?: User[];
  };

  export type Message = {
    chat_id: number;
    content: string;
    day?: string;
    file: any;
    id: number;
    isMine?: boolean;
    is_read?: boolean;
    time: string;
    timeInfo: string;
    type?: string;
    user_id: number;
  };
}

export {};
