import { MouseEventHandler } from "react";

export interface ButtonProps {
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
