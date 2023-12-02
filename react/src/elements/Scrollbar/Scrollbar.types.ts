import { ThemeColorKey } from "@/theme";
import { MCElement } from "@/vite-env";

export interface ScrollbarProps extends Omit<MCElement, "fontKey"> {
  /** Color group to apply to the scrollbar track and thumb */
  colorKey?: ThemeColorKey;
  /**
   * Always show the scrollbar track even if the content does not need to scroll.
   * The default behavior is to hide the track when the content does not need to scroll.
   */
  showScrollbar?: boolean;
  /**
   * Add a border around the container using the theme variables. `colorKey`
   * will also apply to the border
   */
  showBorder?: boolean;
}
