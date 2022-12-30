export interface IInputProps {
  onInput?: ()=> void;
  onFocus?: ()=> void;
  onBlur?: ()=> void;
  type: "text" | "password" | "email";
  name: string;
  placeholder: string;
}
