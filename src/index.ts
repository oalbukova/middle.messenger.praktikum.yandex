// core
import { registerComponent, Router } from './core';

// controllers
import AuthController from '../src/controllers/AuthController';

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
  Loader,
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
registerComponent(Loader);

document.addEventListener('DOMContentLoaded', async () => {
  Router.use('/', SignInPage)
    .use('/sign-up', SignUpPage)
    .use('/change-password', ChangePasswordPage)
    .use('/messenger', ChatPage)
    .use('/chat-not-selected', ChatNotSelectedPage)
    .use('/settings', ProfilePage)
    .use('/server-err', ServerErrPage)
    .use('/not-found', NotFoundPage);

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case '/sign-up':
    case '/':
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.getUser();
    Router.start();
    if (!isProtectedRoute) {
      Router.go('/messenger');
    }
  } catch (error) {
    Router.start();
    if (isProtectedRoute) {
      Router.go('/');
    }
  }
});
