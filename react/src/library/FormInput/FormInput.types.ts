import { InputHTMLAttributes } from "react";

export interface FormInputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  updateField: (field: string, newValue: any) => void;
  multiline?: boolean;
}
