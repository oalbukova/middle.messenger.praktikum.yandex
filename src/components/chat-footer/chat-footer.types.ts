export interface IChatFooter {
  type: string;
  placeholder: string;
  name: string;
  id: string;
}

export interface IChatFooterProps {
  footerInput: Array<IChatFooter>;
}
