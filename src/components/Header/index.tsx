import React from "react";

import { useTheme } from "styled-components";

import {
  BagIcon,
  NikeIcon,
  SNKRSIcon,
  JordanIcon,
  MenuMobileIcon,
} from "components/Lib";
import AnnouncementsBanner from "components/AnnouncementsBanner";
import InputSearch from "components/InputSearch";

import { useMediaQuery } from "hooks/useMediaQuery";

import {
  TopBar,
  LinksContainer,
  VerticalLine,
  Link,
  NavMobile,
  NavDesktop,
  CategoriesBar,
  CategoriesContainer,
  LinkHeader,
  VerticalSpace,
} from "./styles";

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.device.mobile);

  return (
    <>
      <TopBar>
        {isMobile ? (
          <NavMobile>
            <NikeIcon />
            <BagIcon />
            <MenuMobileIcon />
          </NavMobile>
        ) : (
          <>
            <NavDesktop>
              <JordanIcon />
              <SNKRSIcon />
              <LinksContainer>
                <Link href="/">Ajuda</Link>
                <VerticalLine />
                <Link href="/">Acompanhe seu pedido</Link>
                <VerticalLine />
                <Link href="/">Junte-se a nós</Link>
                <VerticalLine />
                <Link href="/">Entrar</Link>
              </LinksContainer>
            </NavDesktop>
            <CategoriesBar>
              <NikeIcon />
              <CategoriesContainer>
                <LinkHeader href="/">Lançamento</LinkHeader>
                <LinkHeader href="/">Masculino</LinkHeader>
                <LinkHeader href="/">Feminino</LinkHeader>
                <LinkHeader href="/">Infantil</LinkHeader>
                <LinkHeader href="/">Ofertas</LinkHeader>
                <LinkHeader href="/">SNKRS</LinkHeader>
              </CategoriesContainer>
              <InputSearch
                onSearchSubmit={() => {}}
                cssProperties={{ width: "176px" }}
              />
              <BagIcon />
            </CategoriesBar>
          </>
        )}
      </TopBar>
      <VerticalSpace />
      <AnnouncementsBanner />
    </>
  );
}

export default Header;
