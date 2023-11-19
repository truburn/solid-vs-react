import { FormInputProps, useFormInputStyles } from "@/library/FormInput";

export function FormInput(_props: FormInputProps) {
  const { updateField, multiline, ...props } = _props;
  const classes = useFormInputStyles();

  const handleOnChange = (evt: any) => {
    const {
      target: { value, name },
    } = evt;
    updateField(name as string, value);
  };

  if (multiline) {
    return (
      <textarea
        rows={5}
        {...props}
        onChange={handleOnChange}
        css={classes.root}
      />
    );
  }

  return <input {...props} onChange={handleOnChange} css={classes.root} />;
}
