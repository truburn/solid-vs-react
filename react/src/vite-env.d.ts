/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { CSSProperties, ReactElement } from "react";
import { ThemeColorKey, ThemeFontKey } from "./theme";

type EntryID = string;

interface MCElement {
  /** Theme color group for styling the element */
  colorKey?: ThemeColorKey;
  /** Styles to override the base styles. */
  className?: string;
  /** Inline CSS styles. */
  style?: CSSProperties;
  /** Content to display within the element. */
  children?: ReactElement | ReactElement[];
  /** Unique ID to assign to the element. */
  id?: string;
  /** Font family to use for the text display. */
  fontKey?: ThemeFontKey;
}
