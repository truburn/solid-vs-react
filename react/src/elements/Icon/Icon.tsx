import { IconProps, useIconStyles } from "@/elements/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import uniqueId from "lodash/uniqueId";

/**
 * Component for rendering Font Awesome icon. Extends properties available
 * in the [FontAwesomeIcon](https://fontawesome.com/docs/web/use-with/react/style)
 * component. Icon definition to display is imported from respective
 * font awesome style package.
 */
export function Icon(_props: IconProps) {
  const { id, ...props } = _props;
  const classes = useIconStyles();
  const elID = id ?? uniqueId("icon-");

  return <FontAwesomeIcon id={elID} css={classes.root} {...props} />;
}
