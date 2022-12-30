export interface IChatContent {
  modificator: string;
  message?: string;
  time: string;
  src?: HTMLImageElement;
  read?: string;
}

export interface IChatContentProps {
  contentInfo: Array<IChatContent>;
}
