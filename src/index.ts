// core
import { renderDOM, registerComponent } from './core';

// pages
import {
  OnboardingPage,
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
} from './components';

// data
import {
  links,
  inputs,
  signUpInputs,
  profileInputs,
  passwordInputs,
} from './data';

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

const path: string = window.location.pathname;

document.addEventListener('DOMContentLoaded', () => {
  switch (path) {
    case '/':
      renderDOM(
        new OnboardingPage({
          links,
        })
      );
      break;
    case '/sign-in':
      renderDOM(
        new SignInPage({
          inputs,
        })
      );
      break;
    case '/sign-up':
      renderDOM(
        new SignUpPage({
          signUpInputs,
        })
      );
      break;
    case '/change-password':
      renderDOM(new ChangePasswordPage({ passwordInputs }));
      break;
    case '/chat-page':
      renderDOM(new ChatPage());
      break;
    case '/chat-not-selected':
      renderDOM(new ChatNotSelectedPage());
      break;
    case '/profile':
      renderDOM(new ProfilePage({ profileInputs }));
      break;
    case '/server-err':
      renderDOM(new ServerErrPage());
      break;
    case '/not-found':
      renderDOM(new NotFoundPage());
      break;
    default:
      renderDOM(new NotFoundPage());
  }
});
