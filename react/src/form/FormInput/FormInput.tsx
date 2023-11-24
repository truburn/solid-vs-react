import { FormInputProps, useFormInputStyles } from "@/form/FormInput";

export function FormInput(_props: FormInputProps) {
  const { updateField, ...props } = _props;
  const classes = useFormInputStyles();

  const handleOnChange = (evt: any) => {
    const {
      target: { value, name },
    } = evt;
    updateField({ [name]: value });
  };

  return (
    <input
      maxLength={50}
      {...props}
      type="text"
      onChange={handleOnChange}
      css={classes.root}
    />
  );
}
