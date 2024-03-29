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
    neutral300: "#D6D6D6",
    neutral500: "#737373",
    neutral600: "#4D4D4D",
    neutral700: "#1A1A1A",
    success300: "#006611",
    danger: "#ef5350",
  },
  fontWeight: {
    regular: "400",
    medium: "500",
    bold: "700",
  },
  fontSize: {
    xSmall: "12px",
    small: "14px",
    regular: "16px",
    medium: "24px",
    large: "32px",
  },
  lineHeight: {
    small: "16px",
    regular: "18px",
    sMedium: "21px",
    medium: "24px",
    large: "28px",
  },
  device: {
    mobile: "(max-width: 960px)",
    desktop: "(min-width: 960px)",
  },
};
