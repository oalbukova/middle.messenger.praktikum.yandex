// core
import { registerComponent, Router } from './core';

// pages
import {
  SignInPage,
  ChangePasswordPage,
  ChatPage,
  NotFoundPage,
  ProfilePage,
  ServerErrPage,
  SignUpPage,
  ChatNotSelectedPage,
} from './pages';

// components
import {
  Link,
  Button,
  Chat,
  Aside,
  Avatar,
  ChatAside,
  ChatContent,
  ChatFooter,
  ChatHeader,
  FormTitle,
  Input,
  Message,
  ModalAdd,
  ModalChat,
  ModalDelete,
  ModalFile,
  ModalItem,
  Search,
  ControlledInput,
  ErrorComponent,
  ChatBtn,
} from './components';

registerComponent(Aside);
registerComponent(Avatar);
registerComponent(Button);
registerComponent(Chat);
registerComponent(ChatAside);
registerComponent(ChatContent);
registerComponent(ChatFooter);
registerComponent(ChatHeader);
registerComponent(FormTitle);
registerComponent(Input);
registerComponent(Link);
registerComponent(Message);
registerComponent(ModalAdd);
registerComponent(ModalChat);
registerComponent(ModalDelete);
registerComponent(ModalFile);
registerComponent(ModalItem);
registerComponent(Search);
registerComponent(ControlledInput);
registerComponent(ErrorComponent);
registerComponent(ChatBtn);

document.addEventListener('DOMContentLoaded', () => {
  // const path: string = window.location.pathname;
  Router.use('/', SignInPage)
    .use('/sign-up', SignUpPage)
    .use('/change-password', ChangePasswordPage)
    .use('/messenger', ChatPage)
    .use('/chat-not-selected', ChatNotSelectedPage)
    .use('/settings', ProfilePage)
    .use('/server-err', ServerErrPage)
    .use('/not-found', NotFoundPage);

  Router.start();
});
