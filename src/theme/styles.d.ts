import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: {
      primary: string;
    };
    colors: {
      primary: string;
      neutral100: string;
      neutral200: string;
      neutral300: string;
      neutral500: string;
      neutral600: string;
      neutral700: string;
      danger: string;
    };
    fontWeight: {
      regular: string;
      medium: string;
      bold: string;
    };
    fontSize: {
      xSmall: string;
      small: string;
      regular: string;
      medium: string;
    };
    lineHeight: {
      small: string;
      regular: string;
      medium: string;
      large: string;
    };
    device: {
      mobile: string;
      desktop: string;
    };
  }
}
