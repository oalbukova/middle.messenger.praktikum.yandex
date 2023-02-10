export const dateFormater = (date: string | null | undefined, type?: string) => {
  const months = [
    'янв',
    'фев',
    'мар',
    'апр',
    'мая',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек',
  ];

  const isMessage = type === 'message';
  const isChatList = type === 'chatList';

  if (!date) {
    return null;
  }

  const calcDate = new Date(date);

  if (isNaN(+calcDate)) {
    return date;
  }

  const day = calcDate.getDate();
  const diff = new Date().getDate() - day;

  const isYesterday = diff === 1;
  const isToday = diff === 0;

  if (isYesterday && !isMessage) {
    return 'Вчера';
  } else if (isToday && !isMessage && !isChatList) {
    return 'Сегодня';
  }

  const hour = calcDate.getHours();
  const calcHour = hour >= 10 ? hour : `0${hour}`;
  const minutes = calcDate.getMinutes();
  const calcMinutes = minutes >= 10 ? minutes : `0${minutes}`;

  if (isMessage || (isChatList && isToday)) {
    return `${calcHour}:${calcMinutes}`;
  }

  const calcMouth = months[calcDate.getMonth()];

  return `${day} ${calcMouth}`;
}
