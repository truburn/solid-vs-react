import { ReactNode } from "react";

export interface FormGroupProps {
  input: ReactNode;
  fieldName: keyof Recipe;
  legend?: string;
  valueDisplay?: ReactNode;
  fieldState?: "idle" | "changed" | "error";
}
