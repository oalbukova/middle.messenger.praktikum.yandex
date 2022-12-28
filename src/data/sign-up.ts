interface IInputs {
  type: string;
  placeholder: string;
  name: string;
  id: string;
  required: boolean;
  errorMsg: string;
}

export const signUpInputs: IInputs[] = [
  {
    type: 'text',
    placeholder: 'имя',
    name: 'first_name',
    id: 'first_name',
    required: true,
    errorMsg: 'Поле обязательно для заполнения',
  },
  {
    type: 'text',
    placeholder: 'фамилия',
    name: 'second_name',
    id: 'second_name',
    required: true,
    errorMsg: 'Поле обязательно для заполнения',
  },
  {
    type: 'text',
    placeholder: 'логин',
    name: 'login',
    id: 'login',
    required: true,
    errorMsg: 'Поле обязательно для заполнения',
  },
  {
    type: 'email',
    placeholder: 'email',
    name: 'email',
    id: 'email',
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
  {
    type: 'tel',
    placeholder: 'телефон',
    name: 'phone',
    id: 'phone',
    required: true,
    errorMsg: 'Поле обязательно для заполнения',
  },
];
