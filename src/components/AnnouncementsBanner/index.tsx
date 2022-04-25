import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from "styled-components/macro";

import { ArrowIcon, NikeSKNRSIcon, TextParagraph } from "components/Lib";

import { Container, Content } from "./styles";

function AnnouncementsBanner() {
  return (
    <Container>
      <ArrowIcon
        onClick={() => {}}
        variant="left"
        cssProperties={{
          marginLeft: "12%",
          "@media(max-width: 960px)": {
            marginLeft: "4%",
          },
        }}
      />
      <Content>
        <NikeSKNRSIcon />
        <TextParagraph>
          Fique por dentro dos lançamentos <span>SNKRS</span>
        </TextParagraph>
      </Content>
      <ArrowIcon
        onClick={() => {}}
        variant="right"
        cssProperties={{
          marginRight: "12%",
          "@media(max-width: 960px)": {
            marginRight: "4%",
          },
        }}
      />
    </Container>
  );
}

export default AnnouncementsBanner;
