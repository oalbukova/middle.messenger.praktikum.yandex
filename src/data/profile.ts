interface Inputs {
  type: string;
  placeholder: string;
  name: string;
  id: string;
  value: string;
}

export const profileInputs: Inputs[] = [
  {
    type: 'text',
    placeholder: 'имя',
    name: 'first_name',
    id: 'first_name',
    value: 'Ольга ',
  },
  {
    type: 'text',
    placeholder: 'фамилия',
    name: 'second_name',
    id: 'second_name',
    value: 'Альбукова ',
  },
  {
    type: 'text',
    placeholder: 'ник',
    name: 'display_name',
    id: 'display_name',
    value: 'albukova ',
  },
  {
    type: 'text',
    placeholder: 'логин',
    name: 'login',
    id: 'login',
    value: 'oalbukova ',
  },
  {
    type: 'email',
    placeholder: 'email',
    name: 'email',
    id: 'email',
    value: 'o.albukova@gmail.com ',
  },
  {
    type: 'tel',
    placeholder: 'телефон',
    name: 'phone',
    id: 'phone',
    value: '+7(980)551-57-22 ',
  },
];
