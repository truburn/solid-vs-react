import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { CSSProperties } from "react";

export interface IconProps extends FontAwesomeIconProps {
  /** Styles to override the base styles. */
  className?: string;
  /** Inline CSS styles. */
  style?: CSSProperties;
  /** Unique ID to assign to the element. */
  id?: string;
}
