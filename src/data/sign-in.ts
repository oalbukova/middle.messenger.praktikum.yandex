interface Inputs {
  type: string;
  placeholder: string;
  name: string;
  id: string;
  required: boolean;
  errorMsg: string;
}

export const inputs: Inputs[] = [
  {
    type: 'text',
    placeholder: 'имя',
    name: 'login',
    id: 'login',
    required: true,
    errorMsg: 'Поле обязательно для заполнения',
  },
  {
    type: 'password',
    placeholder: 'пароль',
    name: 'password',
    id: 'password',
    required: true,
    errorMsg: 'Поле обязательно для заполнения',
  },
];
