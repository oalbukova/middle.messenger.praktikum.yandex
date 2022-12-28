import imgOne from '../../static/images/plus.svg';
import imgTwo from '../../static/images/del-user.svg';
import imgThree from '../../static/images/delete.svg';

interface IButtons {
  title: string;
  src: HTMLImageElement;
  modificator?: string;
}

export const buttons: IButtons[] = [
  {
    title: 'Добавить пользователя',
    src: imgOne,
  },
  {
    title: 'Удалить пользователя',
    src: imgTwo,
    modificator: 'del',
  },
  {
    title: 'Удалить чат',
    src: imgThree,
  },
];
