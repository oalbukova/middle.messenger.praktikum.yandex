interface IInputs {
  type: string;
  placeholder: string;
  name: string;
  id: string;
  required: boolean;
  errorMsg: string;
}

export const passwordInputs: IInputs[] = [
  {
    type: 'password',
    placeholder: 'старый_пароль',
    name: 'oldPassword',
    id: 'oldPassword',
    required: true,
    errorMsg: 'Поле обязательно для заполнения',
  },
  {
    type: 'password',
    placeholder: 'новый_пароль',
    name: 'newPassword',
    id: 'newPassword',
    required: true,
    errorMsg: 'Поле обязательно для заполнения',
  },
];
