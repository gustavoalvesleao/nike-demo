import React from "react";

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
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <>
      <TopBar>
        {isDesktop ? (
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
        ) : (
          <NavMobile>
            <NikeIcon />
            <BagIcon />
            <MenuMobileIcon />
          </NavMobile>
        )}
      </TopBar>
      <VerticalSpace />
      <AnnouncementsBanner />
    </>
  );
}

export default Header;
