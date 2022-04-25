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
      neutral500: string;
      neutral700: string;
      danger: string;
    };
    fontWeight: {
      regular: string;
      medium: string;
    };
    fontSize: {
      xSmall: string;
      small: string;
      regular: string;
      medium: string;
    };
    lineHeight: {
      regular: string;
      medium: string;
    };
  }
}
