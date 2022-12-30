export interface IChatEl {
  name: string;
  text: string;
  time: string;
  count?: number;
  person?: string;
  modificator?: string;
}

export interface IChatAsideProps {
  info: Array<IChatEl>;
}
