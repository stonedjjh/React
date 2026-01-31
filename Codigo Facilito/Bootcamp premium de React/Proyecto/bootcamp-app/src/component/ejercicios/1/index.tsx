import type { InputHTMLAttributes } from "react";

interface InputProps {
  type?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
}

function Input({ type = "text", required = false, ...props }: InputProps) {
  let input: React.JSX.Element = (
    <input type={type} required={required} {...props} />
  );

  return input;
}

export default Input;
