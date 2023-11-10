import type { Theme } from "@emotion/react";
import colors from "@/theme/colors";

export * from "./GlobalStyles";
export * from "./types";

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
  fonts: {
    default: {
      name: "Comfortaa",
      weight: {
        light: 300,
        regular: 500,
        bold: 700,
      },
    },
    body: {
      name: "Happy Monkey",
    },
    heading: {
      name: "Rock Salt",
    },
  },
  spacing: {
    thin: 2,
    small: 4,
    medium: 8,
    large: 16,
    wide: 32,
  },
};
