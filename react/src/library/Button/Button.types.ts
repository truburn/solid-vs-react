import { MouseEventHandler } from "react";

export interface ButtonProps {
  id?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  label?: string;
  isSubmit?: boolean;
  color?:
    | "standard"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error";
}
