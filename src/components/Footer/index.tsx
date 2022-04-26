import React from "react";

import {
  AmexIcon,
  BoletoIcon,
  DiscoverIcon,
  EloIcon,
  FacebookIcon,
  HipercardIcon,
  InstagramIcon,
  Link,
  MastercardIcon,
  TextHeader,
  TextParagraph,
  VisaIcon,
  YoutubeIcon,
} from "components/Lib";

import {
  Container,
  FooterNote,
  InfoContainer,
  InfoContainerWrapper,
  LinkBold,
  Payments,
  SocialMedia,
} from "./styles";

function Footer() {
  return (
    <Container>
      <InfoContainerWrapper>
        <InfoContainer>
          <LinkBold href="/">ENCONTRE UMA LOJA NIKE</LinkBold>
          <LinkBold href="/">CADASTRE-SE PARA RECEBER NOVIDADES</LinkBold>
          <LinkBold href="/">MAPA DO SITE</LinkBold>
        </InfoContainer>
        <InfoContainer>
          <TextHeader>AJUDA</TextHeader>
          <Link href="/">Dúvidas Gerais</Link>
          <Link href="/">Encontre seu Tamanho</Link>
          <Link href="/">Entregas</Link>
          <Link href="/">Pedidos</Link>
          <Link href="/">Trocas e Devoluções</Link>
          <Link href="/">Editar consentimento</Link>
          <Link href="/">Preferências de Cookie</Link>
          <Link href="/">Pagamentos</Link>
          <Link href="/">Produtos</Link>
          <Link href="/">Corporativo</Link>
          <Link href="/">Fale Conosco</Link>
        </InfoContainer>
        <InfoContainer>
          <TextHeader>SOBRE A NIKE</TextHeader>
          <Link href="/">Feito para Jogar</Link>
          <Link href="/">Sustentabilidade</Link>
        </InfoContainer>
        <InfoContainer>
          <div>
            <SocialMedia>
              <TextHeader>REDES SOCIAIS</TextHeader>
              <div>
                <Link
                  href="https://www.facebook.com/nike/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon />
                </Link>
                <Link
                  href="https://www.instagram.com/nike/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                </Link>
                <Link
                  href="https://www.youtube.com/c/NIKE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <YoutubeIcon />
                </Link>
              </div>
            </SocialMedia>
            <Payments>
              <TextHeader>FORMAS DE PAGAMENTO</TextHeader>
              <div>
                <MastercardIcon />
                <VisaIcon />
                <AmexIcon />
                <EloIcon />
                <HipercardIcon />
                <DiscoverIcon />
                <BoletoIcon />
              </div>
            </Payments>
          </div>
        </InfoContainer>
      </InfoContainerWrapper>
      <FooterNote>
        <div>
          <Link href="/">Brasil</Link>
          <Link href="/">Política de Privacidade</Link>
          <Link href="/">Termos de Uso</Link>
        </div>
        <TextParagraph>
          © 2021 Nike. Todos os direitos reservados. Fisia Comércio de Produtos
          Esportivos Ltda - CNPJ: 59.546.515/0016-10 Rua José Semião Rodrigues
          Agostinho, 1370 - Galpão Unidade 17 - Nível 0, 1 e 2 - CEP 06833-300 -
          Embu das Artes/SP.
        </TextParagraph>
      </FooterNote>
    </Container>
  );
}

export default Footer;
