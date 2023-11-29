import { ButtonProps, useButtonStyles } from "@/elements/Button";

/** Standardized and styled button element */
export function Button(props: ButtonProps) {
  const { label, onClick, disabled } = props;
  const classes = useButtonStyles(props);

  return (
    <button css={classes.root} onClick={onClick} disabled={disabled}>
      <span css={classes.label}>{label}</span>
    </button>
  );
}

export default Button;
