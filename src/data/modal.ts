interface IInput {
  type: string;
  placeholder: string;
  name: string;
  id: string;
}

export const modalInput: IInput[] = [
  {
    type: 'text',
    placeholder: 'логин',
    name: 'login',
    id: 'login',
  },
];
