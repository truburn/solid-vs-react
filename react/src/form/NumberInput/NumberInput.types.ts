import { InputHTMLAttributes } from "react";

export interface NumberInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  increment?: number;
  allowDecimal?: boolean;
}
