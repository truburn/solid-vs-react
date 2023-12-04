import { TextareaProps, useTextareaStyles } from "@/form/elements/Textarea";

/** Form textarea element */
export function Textarea(props: TextareaProps) {
  const classes = useTextareaStyles();

  return <div css={classes.root}>Textarea</div>;
}
