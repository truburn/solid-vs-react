import { MouseEventHandler } from "react";

export interface ButtonProps {
  id?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  label?: string;
  color?:
    | "standard"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error";
}
