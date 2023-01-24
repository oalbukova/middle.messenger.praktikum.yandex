export interface IUpdateUser {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface IUpdatePassword {
  oldPassword: string;
  newPassword: string;
}

export interface ISearchUser {
  login: string;
}
