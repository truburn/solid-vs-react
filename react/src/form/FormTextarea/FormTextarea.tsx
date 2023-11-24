import {
  FormTextareaProps,
  useFormTextareaStyles,
} from "@/form/FormTextarea";

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
      maxLength={500}
      {...props}
      onChange={handleOnChange}
      css={classes.root}
    />
  );
}
