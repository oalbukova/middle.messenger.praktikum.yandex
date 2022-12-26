export interface ISignUpPageProps {
  signUpInputs: Array<{
    type: string;
    placeholder: string;
    name: string;
    id: string;
    required: boolean;
    errorMsg: string;
  }>;
}
