export interface ISignInPageProps {
  inputs: Array<{
    type: string;
    placeholder: string;
    name: string;
    id: string;
    required: boolean;
    errorMsg: string;
  }>;
}
