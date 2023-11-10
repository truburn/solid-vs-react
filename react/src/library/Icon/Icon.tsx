import { IconProps } from "@/library/Icon";
import { useIconStyles } from "@/library/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Icon(props: IconProps) {
  const classes = useIconStyles();

  return <FontAwesomeIcon css={classes.root} {...props} />;
}
