export interface IControlledInputProps {
  onInput?: ()=> void;
  onBlur?: ()=> void;
  type: "text" | "password" | "email";
  name: string;
  placeholder: string;
  value?: string;
  error?: string;
}
