import type { Theme } from "@emotion/react";
import { colors, fonts } from "@/theme";

export const theme: Theme = {
  baseSize: 16,
  border: {
    width: 1,
    color: "#d2d6ec",
    radius: 4,
    drawn: {
      borderTopLeftRadius: "205px 25px",
      borderTopRightRadius: "25px 205px",
      borderBottomRightRadius: "205px 25px",
      borderBottomLeftRadius: "25px 205px",
    },
  },
  colors,
  fonts,
  scrollbar: {
    width: 12,
    borderRadius: 12,
  },
  spacing: {
    thin: 2,
    small: 4,
    medium: 8,
    large: 16,
    wide: 32,
  },
};
