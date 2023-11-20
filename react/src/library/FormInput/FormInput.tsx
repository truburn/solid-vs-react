import { FormInputProps, useFormInputStyles } from "@/library/FormInput";

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
      {...props}
      type="text"
      onChange={handleOnChange}
      css={classes.root}
    />
  );
}
