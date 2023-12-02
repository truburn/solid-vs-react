import { ButtonProps, useButtonStyles } from "@/elements/Button";
import { Icon } from "@/elements/Icon";
import uniqueId from "lodash/uniqueId";

/** Standardized and styled button element */
// TODO: add tooltip
export function Button(props: ButtonProps) {
  const {
    label,
    onClick,
    disabled,
    className,
    icon,
    iconPosition,
    iconButton,
    style,
    id,
  } = props;
  const classes = useButtonStyles(props);
  const elID = id ?? uniqueId("button-");

  return (
    <button
      css={classes.root}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={style}
      id={elID}
    >
      {icon && (iconPosition !== "right" || iconButton) && (
        <Icon css={classes.icon} icon={icon} />
      )}
      {!iconButton && <span css={classes.label}>{label}</span>}
      {icon && iconPosition === "right" && !iconButton && (
        <Icon css={classes.icon} icon={icon} />
      )}
    </button>
  );
}

export default Button;
