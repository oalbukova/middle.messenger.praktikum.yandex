import '../static/styles/style.scss';

// core
import { registerComponent, Router, routes, store } from './core';

// controllers
import AuthController from '../src/controllers/AuthController';
import ChatsController from '../src/controllers/ChatsController';

// pages
import {
  SignInPage,
  ChangePasswordPage,
  ChatPage,
  NotFoundPage,
  ProfilePage,
  ServerErrPage,
  SignUpPage,

  
} from './pages';

// components
import {
  Link,
  Button,
  Aside,
  Avatar,
  ChatFooter,
  ChatHeader,
  Chatlist,
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
  ModalAddChat,
  BtnAdd,
  BtnHeader,
  ModalButton,
} from './components';

registerComponent(Aside);
registerComponent(Avatar);
registerComponent(Button);
registerComponent(ChatFooter);
registerComponent(ChatHeader);
registerComponent(Chatlist);
registerComponent(FormTitle);
registerComponent(Input);
registerComponent(Link);
registerComponent(Message);
registerComponent(ModalAdd);
registerComponent(ModalAddChat);
registerComponent(ModalChat);
registerComponent(ModalDelete);
registerComponent(ModalFile);
registerComponent(ModalItem);
registerComponent(Search);
registerComponent(ControlledInput);
registerComponent(ErrorComponent);
registerComponent(ChatBtn);
registerComponent(BtnAdd);
registerComponent(BtnHeader);
registerComponent(ModalButton);

const router = new Router();
const routesValues = Object.values(routes);

document.addEventListener('DOMContentLoaded', async () => {
  router
    //@ts-ignore
    .use(routes.messenger, ChatPage)
    //@ts-ignore
    .use(routes.settings, ProfilePage)
    .use(routes.signIn, SignInPage)
    .use(routes.signUp, SignUpPage)
    .use(routes.changePassword, ChangePasswordPage)
    .use(routes.serverErr, ServerErrPage)
    .use(routes.notFound, NotFoundPage);

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case routes.signIn:
    case routes.signUp:
      isProtectedRoute = false;
      break;
  }

  if (routesValues.includes(window.location.pathname as routes)) {
    try {
      await AuthController.getUser();
      await ChatsController.get();
      router.start();

      if (!isProtectedRoute) {
        router.go(routes.messenger);
      }
    } catch (e) {
      console.log('Ошибка запроса при попытке найти пользователя:', e);
      store.set('currentUser', null);
      router.start();

      if (isProtectedRoute) {
        router.go(routes.signIn);
      }
    }
  } else {
    console.log('404', window.location.pathname);
    router.start();
    router.go(routes.notFound);
  }
});
