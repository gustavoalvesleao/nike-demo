import React from "react";
import styled from "styled-components/macro";
import { CSSObject, css, keyframes } from "styled-components";

import { ReactComponent as loadingIcon } from "assets/spinner.svg";
import { ReactComponent as errorIcon } from "assets/Error.svg";
import { ReactComponent as searchIcon } from "assets/icon_lupa.svg";
import { ReactComponent as bagIcon } from "assets/icon_sacola.svg";
import { ReactComponent as nikeIcon } from "assets/logo_nike.svg";
import { ReactComponent as sNKRSIcon } from "assets/logo_snkrs.svg";
import { ReactComponent as JordanIcon } from "assets/logo_Jordan.svg";
import { ReactComponent as MenuMobileIcon } from "assets/menu-hamburguer.svg";
import { ReactComponent as ArrowLeft } from "assets/icon_seta_esquerda.svg";
import { ReactComponent as ArrowRight } from "assets/icon_seta_direita.svg";
import { ReactComponent as nikeSKNRSIcon } from "assets/logo_nike_snkrs.svg";

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

function ArrowIcon({
  onClick,
  variant,
  cssProperties,
}: {
  onClick: () => void;
  variant: "left" | "right";
  cssProperties?: CSSObject;
}) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`arrow-${variant}`}
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        backgroundColor: "white",
        cursor: "pointer",
        ...cssProperties,
      }}
    >
      {variant === "left" ? <ArrowLeft /> : <ArrowRight />}
    </div>
  );
}

const SNKRSIcon = styled(sNKRSIcon)({});
const BagIcon = styled(bagIcon)({});
const NikeIcon = styled(nikeIcon)({});
const NikeSKNRSIcon = styled(nikeSKNRSIcon)({});

BagIcon.defaultProps = { "aria-label": "bag-icon" };
NikeIcon.defaultProps = { "aria-label": "nike-icon" };
SNKRSIcon.defaultProps = { "aria-label": "SNKRS-icon" };
JordanIcon.defaultProps = { "aria-label": "Jordan-icon" };
MenuMobileIcon.defaultProps = { "aria-label": "menu-mobile-icon" };
NikeSKNRSIcon.defaultProps = { "aria-label": "nike-SNKRS-icon" };

const TextParagraph = styled.p(({ theme }) => ({
  margin: 0,
  fontFamily: theme.fontFamily.primary,
  fontWeight: theme.fontWeight.regular,
  fontSize: theme.fontSize.small,
  color: theme.colors.neutral700,
  lineHeight: theme.lineHeight.regular,
}));

export {
  Spinner,
  ErrorIcon,
  SearchIcon,
  BagIcon,
  NikeIcon,
  SNKRSIcon,
  JordanIcon,
  MenuMobileIcon,
  ArrowIcon,
  NikeSKNRSIcon,
  TextParagraph,
};
