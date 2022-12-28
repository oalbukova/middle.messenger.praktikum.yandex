interface IInput {
  type: string;
  placeholder: string;
  name: string;
  id: string;
}

export const footerInput: IInput[] = [
  {
    type: 'text',
    placeholder: 'Сообщение',
    name: 'message',
    id: 'message',
  },
];
