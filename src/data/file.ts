import imgOne from '../../static/images/video.svg';
import imgTwo from '../../static/images/add-file.svg';
import imgThree from '../../static/images/location.svg';

interface IButtons {
  title: string;
  src: HTMLImageElement;
}

export const fileButtons: IButtons[] = [
  {
    title: 'Фото или Видео',
    src: imgOne,
  },
  {
    title: 'Файл',
    src: imgTwo,
  },
  {
    title: 'Локация',
    src: imgThree,
  },
];
