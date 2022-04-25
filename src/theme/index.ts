import "@fontsource/roboto";
import { DefaultTheme } from "styled-components";

export const base: DefaultTheme = {
  fontFamily: {
    primary: "Roboto",
  },
  colors: {
    primary: "#000",
    neutral100: "#FFFFFF",
    neutral200: "#F7F7F7",
    neutral500: "#737373",
    neutral700: "#1A1A1A",
    danger: "#ef5350",
  },
  fontWeight: {
    regular: "400",
    medium: "500",
  },
  fontSize: {
    xSmall: "12px",
    small: "14px",
    regular: "16px",
    medium: "24px",
  },
  lineHeight: {
    regular: "18px",
    medium: "24px",
  },
};
