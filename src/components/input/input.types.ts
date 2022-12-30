export interface IInputProps {
  onFocus?: ()=> void;
  onBlur?: ()=> void;
  type: "text" | "password" | "email";
  name: string;
  placeholder: string;
}
