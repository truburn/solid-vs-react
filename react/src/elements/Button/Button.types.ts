import { MCElement } from "@/vite-env";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { MouseEventHandler } from "react";

export interface ButtonProps extends Omit<MCElement, "children"> {
  /**
   * Text label to display inside the button. If the variant is an
   * icon style, the label is used as the tooltip unless a tooltip
   * is defined.
   */
  label: string;
  /**
   * Text to display when the button is hovered. If the variabnt is
   * and icon style and the tooltip is not defined, the label is used.
   */
  tooltip?: string;
  /** Icon to display inside the button */
  icon?: IconDefinition;
  /** Disable the use of the button */
  disabled?: boolean;
  /**
   * What happens when the button is clicked. If the button is a
   * submit button, then this function will be ignored.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /**
   * If the variant is not an icon style, where should the icon be
   * displayed in relation to the label.
   */
  iconPosition?: "left" | "right";
  /** The button submits a form. The `onClick` function will be ignored. */
  submit?: boolean;
  /** The variant of button to display. */
  variant?: ButtonVariant;
  /** The style of button to display. */
  buttonStyle?: ButtonStyle;
  /** Display only the icon as a button. */
  iconButton?: boolean;
}

export enum ButtonStyle {
  FILLED = "filled",
  OUTLINE = "outline",
}

export enum ButtonVariant {
  STANDARD = "standard",
  ROUND = "round",
  SQUARE = "square",
  TEXT = "text",
  CUSTOM = "custom",
}
