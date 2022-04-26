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
import { ReactComponent as facebookIcon } from "assets/logo_redes_sociais_facebook.svg";
import { ReactComponent as instagramIcon } from "assets/logo_redes_sociais_instagram.svg";
import { ReactComponent as youtubeIcon } from "assets/logo_redes_sociais_youtube.svg";
import { ReactComponent as amexIcon } from "assets/pgto_Amex.svg";
import { ReactComponent as boletoIcon } from "assets/pgto_Boleto.svg";
import { ReactComponent as discoverIcon } from "assets/pgto_Discover.svg";
import { ReactComponent as eloIcon } from "assets/pgto_Elo.svg";
import { ReactComponent as hipercardIcon } from "assets/pgto_Hipercard.svg";
import { ReactComponent as mastercardIcon } from "assets/pgto_Mastercard.svg";
import { ReactComponent as visaIcon } from "assets/pgto_Visa.svg";

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
const FacebookIcon = styled(facebookIcon)(({ theme }) => ({
  "& path": {
    fill: theme.colors.neutral500,
  },
}));
const InstagramIcon = styled(instagramIcon)(({ theme }) => ({
  "& path": {
    fill: theme.colors.neutral500,
  },
}));
const YoutubeIcon = styled(youtubeIcon)(({ theme }) => ({
  "& path": {
    fill: theme.colors.neutral500,
  },
}));

const AmexIcon = styled(amexIcon)({});
const BoletoIcon = styled(boletoIcon)({});
const DiscoverIcon = styled(discoverIcon)({});
const EloIcon = styled(eloIcon)({});
const HipercardIcon = styled(hipercardIcon)({});
const MastercardIcon = styled(mastercardIcon)({});
const VisaIcon = styled(visaIcon)({});

BagIcon.defaultProps = { "aria-label": "bag-icon" };
NikeIcon.defaultProps = { "aria-label": "nike-icon" };
SNKRSIcon.defaultProps = { "aria-label": "SNKRS-icon" };
JordanIcon.defaultProps = { "aria-label": "Jordan-icon" };
MenuMobileIcon.defaultProps = { "aria-label": "menu-mobile-icon" };
NikeSKNRSIcon.defaultProps = { "aria-label": "nike-SNKRS-icon" };
FacebookIcon.defaultProps = { "aria-label": "facebook-icon" };
InstagramIcon.defaultProps = { "aria-label": "instagram-icon" };
YoutubeIcon.defaultProps = { "aria-label": "youtube-icon" };
AmexIcon.defaultProps = { "aria-label": "amex-icon" };
BoletoIcon.defaultProps = { "aria-label": "boleto-icon" };
DiscoverIcon.defaultProps = { "aria-label": "discover-icon" };
EloIcon.defaultProps = { "aria-label": "elo-icon" };
HipercardIcon.defaultProps = { "aria-label": "hipercard-icon" };
MastercardIcon.defaultProps = { "aria-label": "mastercard-icon" };
VisaIcon.defaultProps = { "aria-label": "visa-icon" };

const TextParagraph = styled.p(({ theme }) => ({
  margin: 0,
  fontFamily: theme.fontFamily.primary,
  fontWeight: theme.fontWeight.regular,
  fontSize: theme.fontSize.small,
  color: theme.colors.neutral700,
  lineHeight: theme.lineHeight.regular,
}));

const TextHeader = styled.h2(({ theme }) => ({
  margin: 0,
  fontFamily: theme.fontFamily.primary,
  fontWeight: theme.fontWeight.medium,
  fontSize: theme.fontSize.regular,
  color: theme.colors.neutral700,
  lineHeight: theme.lineHeight.large,
}));

const Button = styled.button(({ theme }) => ({
  backgroundColor: theme.colors.primary,
  color: theme.colors.neutral100,
  fontFamily: theme.fontFamily.primary,
  fontWeight: theme.fontWeight.bold,
  lineHeight: theme.lineHeight.small,
  borderRadius: "50px",
  border: `solid 1px ${theme.colors.neutral100}`,
  padding: "16px 24px",
  cursor: "pointer",
}));

const Link = styled.a(({ theme }) => ({
  fontFamily: theme.fontFamily.primary,
  fontWeight: theme.fontWeight.regular,
  fontSize: theme.fontSize.xSmall,
  lineHeight: theme.lineHeight.regular,
  color: theme.colors.neutral500,
  textDecoration: "none",
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
  TextHeader,
  Button,
  Link,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  AmexIcon,
  BoletoIcon,
  DiscoverIcon,
  EloIcon,
  HipercardIcon,
  MastercardIcon,
  VisaIcon,
};
