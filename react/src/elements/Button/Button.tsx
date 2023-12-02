import { ButtonProps, useButtonStyles } from "@/elements/Button";
import { Icon } from "@/elements/Icon";

/** Standardized and styled button element */
export function Button(props: ButtonProps) {
  const { label, onClick, disabled, className, icon, iconPosition, iconButton, style } = props;
  const classes = useButtonStyles(props);

  return (
    <button css={classes.root} onClick={onClick} disabled={disabled} className={className} style={style}>
      {icon && (iconPosition !== "right" || iconButton) && <Icon css={classes.icon} icon={icon} />}
      {!iconButton && <span css={classes.label}>{label}</span>}
      {icon && iconPosition === "right" && !iconButton && <Icon css={classes.icon} icon={icon} />}
    </button>
  );
}

export default Button;
