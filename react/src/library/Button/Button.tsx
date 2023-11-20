import { ButtonProps, useButtonStyles } from "@/library/Button";

export function Button(props: ButtonProps) {
  const {
    onClick,
    label = "Button Label",
    color,
    disabled,
    id,
    isSubmit,
  } = props;
  const classes = useButtonStyles(color);

  return (
    <button
      css={classes.root}
      onClick={onClick}
      id={id}
      disabled={disabled}
      type={isSubmit ? "submit" : "button"}
    >
      {label}
    </button>
  );
}
