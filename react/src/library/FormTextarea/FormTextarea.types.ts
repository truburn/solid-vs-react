import { UpdateField } from "@/routes/EditRecipe";
import { InputHTMLAttributes } from "react";

export interface FormTextareaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  updateField: UpdateField;
}
