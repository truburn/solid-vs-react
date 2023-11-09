import type { Theme } from "@emotion/react";

const colors: Theme["colors"] = {
  background: "#fafafa",
  panel: {
    background: "#fafaff",
    border: "#919eb5",
  },
  standard: {
    main: "#556074",
    contrast: "#fafaff",
    altMain: "#2d3647",
    altContrast: "#d1d6ec",
  },
  primary: {
    main: "#e0006c",
    contrast: "#fbf7f9",
    altMain: "#8c0144",
    altContrast: "#eecedd",
  },
  secondary: {
    main: "#007e86",
    contrast: "#f0f9fa",
    altMain: "#0c4c50",
    altContrast: "#a4d5d8",
  },
  info: {
    main: "#0171d8",
    contrast: "#f3f8fc",
    altMain: "#124370",
    altContrast: "#9fc0df",
  },
  success: {
    main: "#248122",
    contrast: "#e5fae5",
    altMain: "#025400",
    altContrast: "#bfe9be",
  },
  warning: {
    main: "#b05f00",
    contrast: "#fcfbf3",
    altMain: "#774f00",
    altContrast: "#ead193",
  },
  error: {
    main: "#ea0000",
    contrast: "#fdfbfa",
    altMain: "#9b0000",
    altContrast: "#f1cbcb",
  },
};

export default colors;
