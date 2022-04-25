import styled, { CSSObject, css, keyframes } from "styled-components";

import { ReactComponent as loadingIcon } from "assets/spinner.svg";
import { ReactComponent as errorIcon } from "assets/Error.svg";
import { ReactComponent as searchIcon } from "assets/icon_lupa.svg";
import { ReactComponent as BagIcon } from "assets/icon_sacola.svg";
import { ReactComponent as NikeIcon } from "assets/logo_nike.svg";
import { ReactComponent as SNKRSIcon } from "assets/logo_snkrs.svg";
import { ReactComponent as JordanIcon } from "assets/logo_Jordan.svg";
import { ReactComponent as MenuMobileIcon } from "assets/menu-hamburguer.svg";

const ImageContainer = styled.div({
  display: "flex",
  alignContent: "center",
});

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const iconDefaultSize = {
  width: "16px",
  height: "16px",
} as CSSObject;

const Spinner = styled(loadingIcon)(
  () => ({
    ...iconDefaultSize,
  }),
  css`
    animation: ${rotate} 1s linear infinite;
  `
);
Spinner.defaultProps = { "aria-label": "loading" };

const ErrorIcon = styled(errorIcon)(({ theme }) => ({
  "& path": {
    fill: theme.colors.danger,
  },
  ...iconDefaultSize,
}));
ErrorIcon.defaultProps = { "aria-label": "error" };

const SearchIcon = styled(searchIcon)({
  ...iconDefaultSize,
});
SearchIcon.defaultProps = { "aria-label": "buscar" };

BagIcon.defaultProps = { "aria-label": "bag-icon" };
NikeIcon.defaultProps = { "aria-label": "nike-icon" };
SNKRSIcon.defaultProps = { "aria-label": "SNKRS-icon" };
JordanIcon.defaultProps = { "aria-label": "Jordan-icon" };
MenuMobileIcon.defaultProps = { "aria-label": "menu-mobile-icon" };

export {
  ImageContainer,
  Spinner,
  ErrorIcon,
  SearchIcon,
  BagIcon,
  NikeIcon,
  SNKRSIcon,
  JordanIcon,
  MenuMobileIcon,
};
