import { JSXElementConstructor } from "react";

export interface FormFieldProps {
  fieldName: keyof Recipe;
  value?: any;
}

export interface FormGroupProps extends FormFieldProps {
  onChange: (field: keyof Recipe, newValue: any) => void;
  initialValue?: any;
  InputComponent?: JSXElementConstructor<Partial<FormGroupProps>>;
  DisplayComponent?: JSXElementConstructor<Omit<FormFieldProps, "fieldName">>;
}
