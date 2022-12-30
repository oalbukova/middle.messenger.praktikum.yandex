interface ILinks {
  title: string;
  href: string;
}

export const links: ILinks[] = [
  {
    title: 'Регистрация',
    href: 'signup',
  },
  {
    title: 'Авторизация',
    href: 'signin',
  },
  {
    title: 'Профиль',
    href: './profile',
  },
  {
    title: 'Смена пароля',
    href: './change-password',
  },
  {
    title: 'Чат (активный диалог) ',
    href: './chat-page',
  },
  {
    title: 'Чат',
    href: './chat-not-selected',
  },
  {
    title: 'Ошибка 404',
    href: './not-found',
  },
  {
    title: 'Ошибка 500',
    href: './server-err',
  },
];
