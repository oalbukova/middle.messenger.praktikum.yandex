// core
import { renderDOM, registerComponent } from './core';

// pages
import SignInPage from './pages/sign-in';
import {
  OnboardingPage,
  // SignInPage,
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
  MainLink,
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
  ChatBtn
} from './components';

// data
import { links } from './data';

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
registerComponent(MainLink);
registerComponent(Message);
registerComponent(ModalAdd);
registerComponent(ModalChat);
registerComponent(ModalDelete);
registerComponent(ModalFile);
registerComponent(ModalItem);
registerComponent(Search);
registerComponent(ControlledInput);
registerComponent(ErrorComponent);
registerComponent( ChatBtn);



document.addEventListener('DOMContentLoaded', () => {
  const path: string = document.location.pathname;
  switch (path) {
    case '/':
      renderDOM(

        new OnboardingPage({
          links,
        })
      );
      break;
    case '/sign-in':
      renderDOM(new SignInPage());
      break;
    case '/sign-up':
      renderDOM(new SignUpPage());
      break;
    case '/change-password':
      renderDOM(new ChangePasswordPage());
      break;
    case '/chat-page':
      renderDOM(new ChatPage());
      break;
    case '/chat-not-selected':
      renderDOM(new ChatNotSelectedPage());
      break;
    case '/profile':
      renderDOM(new ProfilePage());
      break;
    case '/server-err':
      renderDOM(new ServerErrPage());
      break;
    case '/not-found':
      renderDOM(new NotFoundPage());
      break;
  //   default:
  //     renderDOM(new NotFoundPage());
  }
});
