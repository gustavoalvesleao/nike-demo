import styled from "styled-components";

import { CloseIcon, TextHeader, TextParagraph } from "components/Lib";

const Container = styled.div`
  width: 100%;
  margin-bottom: 32px;
`;

const Header = styled.div`
  display: inline-flex;
  margin-bottom: 16px;
  align-items: flex-end;
  width: 100%;

  ${TextHeader} {
    margin-bottom: 0;
    font-size: ${(props) => props.theme.fontSize.medium};

    &.distance {
      font-size: ${(props) => props.theme.fontSize.regular};
      font-weight: ${(props) => props.theme.fontWeight.medium};
      line-height: ${(props) => props.theme.lineHeight.sMedium};
      margin-left: auto;
      padding-top: 7px;
    }
  }
`;

const InfoContainer = styled.div`
  background-color: ${(props) => props.theme.colors.neutral100};
  border-radius: 8px;
  padding: 24px;

  ${TextParagraph} {
    font-size: ${(props) => props.theme.fontSize.xSmall};
    color: ${(props) => props.theme.colors.neutral500};
    line-height: ${(props) => props.theme.lineHeight.regular};
    margin-bottom: 8px;

    &.availability {
      font-weight: ${(props) => props.theme.fontWeight.bold};
      color: ${(props) => props.theme.colors.success300};
    }
  }
`;

const MapWrapper = styled.div`
  z-index: 30;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
`;

const CloseContainer = styled.div`
  padding: 0 16px;
  height: 48px;
  background-color: ${(props) => props.theme.colors.neutral100};
  display: flex;
  align-items: center;

  ${CloseIcon} {
    margin-left: auto;
  }
`;

const MapButton = styled.button`
  border: none;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.neutral700};
  background-color: transparent;
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-size: ${(props) => props.theme.fontSize.regular};
  line-height: ${(props) => props.theme.lineHeight.medium};
  pointer: cursor;
`;

const MapLinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  ${MapButton} {
    margin-left: 8px;
  }
`;

export {
  Container,
  Header,
  InfoContainer,
  MapWrapper,
  CloseContainer,
  MapButton,
  MapLinkContainer,
};
