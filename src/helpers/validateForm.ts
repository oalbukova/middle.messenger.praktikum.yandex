export enum ValidateType {
  FirstName = 'first_name',
  SecondName = 'second_name',
  DisplayName = 'display_name',
  Login = 'login',
  Password = 'password',
  Email = 'email',
  Phone = 'phone',
  Message = 'message',
}

interface IValidateRule {
  value: string;
  type: ValidateType;
}

export function validateForm(rules: IValidateRule[]) {
  let errorMessage = '';

  for (let i = 0; i < rules.length; i++) {
    const { type, value } = rules[i];

    if (type === ValidateType.FirstName) {
      if (value.length === 0) {
        errorMessage = 'Поле Имя должно быть заполнено';
        break;
      } else if (!value.match(/^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/)) {
        errorMessage = 'Неверный формат поля Имя';
        break;
      }
    }

    if (type === ValidateType.SecondName) {
      if (value.length === 0) {
        errorMessage = 'Поле Фамилия должно быть заполнено';
        break;
      } else if (!value.match(/^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/)) {
        errorMessage = 'Неверный формат поля Фамилия';
        break;
      }
    }

    if (type === ValidateType.DisplayName) {
      if (value.length === 0) {
        errorMessage = 'Поле Ник должно быть заполнено';
        break;
      }
    }

    if (type === ValidateType.Login) {
      if (value.length === 0 ) {
        errorMessage = 'Поле Логин должно быть заполнено';
        break;
      }
      else if (value.length < 3 || value.length > 20) {
        errorMessage = 'Поле Логин должно содержать от 3 до 20 символов';
        break;
      } else if (!value.match(/^(?=.*[a-zA-Z])([a-zA-Z0-9-_]){3,20}$/)) {
        errorMessage = 'Неверный формат поля Логин';
        break;
      }
    }

    if (type === ValidateType.Password) {
      if (value.length === 0 ) {
        errorMessage = 'Поле Пароль должно быть заполнено';
        break;
      }
      else if (value.length < 8 || value.length > 40) {
        errorMessage = 'Поле Пароль должно содержать от 8 до 40 символов';
        break;
      } else if (!value.match(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/)) {
        errorMessage =
          'Пароль должен содержать хотя бы одну заглавную букву и цифру';
        break;
      }
    }

    if (type === ValidateType.Email) {
      if (
        !value.match(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i
        )
      ) {
        errorMessage = 'Введите корректный email';
        break;
      }
    }

    if (type === ValidateType.Phone) {
      if (
        !value.match(
          /^(\+)?[\d\- ]{10,15}$/
        )
      ) {
        errorMessage = 'Введите корректный номер телефона';
        break;
      }
    }

    if (type === ValidateType.Message) {
      if (!value || value.length === 0) {
        errorMessage = 'Поле Сообщение должно быть заполнено';
        break;
      }
    }
  }

  return errorMessage;
}
