import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: {
      primary: string;
    };
    colors: {
      primary: string;
      neutral200: string;
      neutral500: string;
      danger: string;
    };
    fontWeight: {
      regular: string;
      medium: string;
    };
    fontSize: {
      small: string;
      medium: string;
    };
    lineHeight: {
      regular: string;
      medium: string;
    };
  }
}
