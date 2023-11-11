interface ThemeColor {
  main: string;
  contrast: string;
  altMain: string;
  altContrast: string;
}

interface ThemeFont {
  name: string;
  weight?: {
    light?: number;
    regular?: number;
    medium?: number;
    semiBold?: number;
    bold?: number;
  };
}

export interface MCTheme {
  baseSize: number;
  border: {
    width: number;
    radius: number;
    color: string;
    drawn: {
      borderTopLeftRadius: string;
      borderTopRightRadius: string;
      borderBottomRightRadius: string;
      borderBottomLeftRadius: string;
    };
  };
  colors: {
    background: string;
    panel: {
      background: string;
      border: string;
    };
    standard: ThemeColor;
    primary: ThemeColor;
    secondary: ThemeColor;
    info: ThemeColor;
    success: ThemeColor;
    warning: ThemeColor;
    error: ThemeColor;
  };
  fonts: {
    default: ThemeFont;
    body: ThemeFont;
    heading: ThemeFont;
  };
  scrollbar: {
    width: number;
    borderRadius: number;
  };
  spacing: {
    thin: number;
    small: number;
    medium: number;
    large: number;
    wide: number;
  };
}
