import { ButtonProps, useButtonStyles } from "@/library/Button";

export function Button(props: ButtonProps) {
  const { onClick, label = "Button Label", color, disabled, id } = props;
  const classes = useButtonStyles(color);

  return (
    <button css={classes.root} onClick={onClick} id={id} disabled={disabled}>
      {label}
    </button>
  );
}
