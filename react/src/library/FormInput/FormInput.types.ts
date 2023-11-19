import { UpdateField } from "@/routes/EditRecipe";
import { InputHTMLAttributes } from "react";

export interface FormInputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  updateField: UpdateField;
  multiline?: boolean;
}
