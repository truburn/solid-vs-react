import { FormTextareaProps, useFormTextareaStyles } from "@/library/FormTextarea";

export function FormTextarea(_props: FormTextareaProps) {
  const { updateField, ...props } = _props;
  const classes = useFormTextareaStyles();

  const handleOnChange = (evt: any) => {
    const {
      target: { value, name },
    } = evt;
    updateField({ [name]: value });
  };

  return (
    <textarea
      {...props}
      onChange={handleOnChange}
      css={classes.root}
      maxLength={500}
    />
  );
}
