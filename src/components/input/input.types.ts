export interface IInputProps {
  type: string;
  id: number;
  name: string;
  placeholder: string;
  required?: boolean;
  value?: string;
  errorMsg: string;
}
