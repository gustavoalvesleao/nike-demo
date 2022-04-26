import styled from "styled-components";

import { TextHeader, Link, TextParagraph } from "components/Lib";
import { AccordionContainer } from "components/Accordion/styles";

const Container = styled.div`
  padding: 40px;
  background-color: ${(props) => props.theme.colors.neutral700};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.neutral100};

  ${(props) => `@media${props.theme.device.mobile}`} {
    padding: 32px 16px;
  }

  ${Link} {
    color: ${(props) => props.theme.colors.neutral200};
    line-height: ${(props) => props.theme.lineHeight.medium};
  }

  ${AccordionContainer} {
    margin-bottom: 24px;

    ${Link} {
      margin-bottom: 8px;
      line-height: ${(props) => props.theme.lineHeight.regular};
    }
  }
`;

const InfoContainerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  ${(props) => `@media${props.theme.device.desktop}`} {
    margin-bottom: 32px;
    border-bottom: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${(props) => props.theme.colors.neutral600};
  }

  ${(props) => `@media${props.theme.device.mobile}`} {
    flex-direction: column;
  } ;
`;

const LinkBold = styled(Link)`
  font-size: ${(props) => props.theme.fontSize.regular};
  color: ${(props) => props.theme.colors.neutral100};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  line-height: ${(props) => props.theme.lineHeight.medium};
  margin-bottom: 16px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 25%;

  ${TextHeader} {
    color: ${(props) => props.theme.colors.neutral100};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    margin-bottom: 16px;
  }

  ${Link} {
    margin-bottom: 16px;
    line-height: ${(props) => props.theme.lineHeight.regular};
  }

  ${(props) => `@media${props.theme.device.mobile}`}  {
    width: 100%;
    margin-bottom: 24px;   
    border-bottom: solid;
    border-bottom-color: ${(props) => props.theme.colors.neutral600};
    border-bottom-width: 1px;
  },
`;

const MobileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SocialMedia = styled.div`
  margin-bottom: 32px;

  ${TextHeader} {
    margin-bottom: 8px;
  }

  ${Link} {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  ${(props) => `@media${props.theme.device.mobile}`}  {
      margin-bottom: 24px;   
  },
`;

const Payments = styled.div`
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 250px;
  }

  ${(props) => `@media${props.theme.device.mobile}`}  {
    margin-bottom: 24px;   
},
`;

const FooterNote = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 100%;

  ${TextParagraph} {
    color: ${(props) => props.theme.colors.neutral300};
    max-width: 464px;
  }

  ${Link} {
    &:not(:first-child) {
      margin-left: 48px;
    }
  }

  ${(props) => `@media${props.theme.device.mobile}`}  {
    flex-direction: column;

    div {
      margin-bottom: 24px;
    }
  },
`;

export {
  Container,
  InfoContainer,
  InfoContainerWrapper,
  LinkBold,
  SocialMedia,
  Payments,
  FooterNote,
  MobileInfoContainer,
};
