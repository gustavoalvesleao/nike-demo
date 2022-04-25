import React from "react";

import { NikeIcon, TextHeader, TextParagraph, Button } from "components/Lib";

import { Container } from "./styles";

function Newsletter() {
  return (
    <Container>
      <NikeIcon />
      <TextHeader>RECEBA AS NOVIDADES DA NIKE</TextHeader>
      <TextParagraph>
        Cadastre-se e seja um dos primeiros a saber de todas as novidades e
        ofertas.
      </TextParagraph>
      <Button>Cadastre-se</Button>
    </Container>
  );
}

export default Newsletter;
