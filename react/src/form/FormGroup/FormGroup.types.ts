import { ReactNode } from "react";

export interface FormGroupProps {
  input: ReactNode;
  legend: string;
  valueDisplay?: ReactNode;
  fieldState?: "idle" | "changed" | "error";
  info?: string;
  error?: string;
}

export interface FormGroupStyleProps {
  status: FormGroupProps["fieldState"];
}
