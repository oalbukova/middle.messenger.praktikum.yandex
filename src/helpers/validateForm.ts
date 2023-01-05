// core
import Block from 'core/Block';

export enum ValidateType {
  first_name = 'first_name',
  second_name = 'second_name',
  display_name = 'display_name',
  login = 'login',
  password = 'password',
  email = 'email',
  phone = 'phone',
  message = 'message',
}

interface IValidateRule {
  value: string;
  type: string;
}

interface IFormData {
  [key: string]: string;
}

export function validateForm(rules: IValidateRule[]) {
  let errorMessage = '';

  for (let i = 0; i < rules.length; i++) {
    const { type, value } = rules[i];

    if (type === ValidateType.first_name) {
      if (value.length === 0) {
        errorMessage = 'Поле Имя должно быть заполнено';
        break;
      } else if (!value.match(/^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/)) {
        errorMessage = 'Неверный формат поля Имя';
        break;
      }
    }

    if (type === ValidateType.second_name) {
      if (value.length === 0) {
        errorMessage = 'Поле Фамилия должно быть заполнено';
        break;
      } else if (!value.match(/^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/)) {
        errorMessage = 'Неверный формат поля Фамилия';
        break;
      }
    }

    if (type === ValidateType.display_name) {
      if (value.length === 0) {
        errorMessage = 'Поле Ник должно быть заполнено';
        break;
      }
    }

    if (type === ValidateType.login) {
      if (value.length === 0) {
        errorMessage = 'Поле Логин должно быть заполнено';
        break;
      } else if (value.length < 3 || value.length > 20) {
        errorMessage = 'Поле Логин должно содержать от 3 до 20 символов';
        break;
      } else if (!value.match(/^(?=.*[a-zA-Z])([a-zA-Z0-9-_]){3,20}$/)) {
        errorMessage = 'Неверный формат поля Логин';
        break;
      }
    }

    if (type === ValidateType.password) {
      if (value.length === 0) {
        errorMessage = 'Поле Пароль должно быть заполнено';
        break;
      } else if (value.length < 8 || value.length > 40) {
        errorMessage = 'Поле Пароль должно содержать от 8 до 40 символов';
        break;
      } else if (!value.match(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/)) {
        errorMessage =
          'Пароль должен содержать хотя бы одну заглавную букву и цифру';
        break;
      }
    }

    if (type === ValidateType.email) {
      if (
        !value.match(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i
        )
      ) {
        errorMessage = 'Введите корректный email';
        break;
      }
    }

    if (type === ValidateType.phone) {
      if (!value.match(/^(\+)?[\d\- ]{10,15}$/)) {
        errorMessage = 'Введите корректный номер телефона';
        break;
      }
    }

    if (type === ValidateType.message) {
      if (!value || value.length === 0) {
        errorMessage = 'Поле Сообщение должно быть заполнено';
        break;
      }
    }
  }

  return errorMessage;
}

export function onHandleBlur(e: Event, ref: { [key: string]: Block }) {
  const imputEl = e.target as HTMLInputElement;
  const errorMessage = validateForm([
    { type: imputEl.name, value: imputEl.value },
  ]);
  ref[imputEl.name].refs.errorRef.setProps({
    text: errorMessage,
  });
  errorMessage
    ? imputEl.classList.add('input_type_error')
    : imputEl.classList.remove('input_type_error');
}

export function onHandleFocus(e: Event, ref: { [key: string]: Block }) {
  const imputEl = e.target as HTMLInputElement;
  ref.errorRef.setProps({ text: '' });
  imputEl.classList.remove('input_type_error');
}

export function onHandleSubmit(e: SubmitEvent, ref: { [key: string]: Block }) {
  e.preventDefault();
  let formData: IFormData = {};
  let errors = [];
  const inputList = Array.from(
    document.querySelectorAll('.input')
  ) as HTMLInputElement[];

  inputList.forEach((input) => {
    const errorMessage = validateForm([
      { type: input.name, value: input.value },
    ]);

    ref[input.name].refs.errorRef.setProps({
      text: errorMessage,
    });
    errorMessage
      ? input.classList.add('input_type_error')
      : input.classList.remove('input_type_error');

    errorMessage && errors.push(errorMessage);
    formData[input.name] = input.value;
  });

  if (!errors.length) {
    inputList.forEach((input) => (input.value = ''));
    console.log(formData);
  }
}
