export interface IChatEl {
  name: string;
  text: string;
  time: string;
  count?: number;
  person?: string;
  modificator?: string;

  //   unread: string;
  //   created: string;
  //   avatar: any;
  //   title: string;
  //   id: string;
  //   chats: IChatInfo[];
  //   isLoaded: boolean;
}

export interface IChatAsideProps {
  info: Array<IChatEl>;
}
