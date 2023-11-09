import "@emotion/react";
import { MCTheme } from "@/theme";

declare module "@emotion/react" {
  export interface Theme extends MCTheme {}
}
