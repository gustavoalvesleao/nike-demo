import styled from "styled-components";

import { TextHeader, TextParagraph } from "components/Lib";

const Container = styled.div`
  padding: 40px 40px 45px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > ${TextHeader} {
    margin-bottom: 40px;
    font-size: ${(props) => props.theme.fontSize.large};
  }

  ${(props) => `@media${props.theme.device.mobile}`} {
    padding: 32px 16px;
  }
`;

const InputSearchContainer = styled.div({
  maxWidth: "100%",
  width: "590px",
  marginBottom: "40px",
});

const StoresContainer = styled.div`
  display: flex;
  height: 538px;
  width: 100%;
  justify-content: center;
  gap: 24px;
`;

const ResultsContainer = styled.div`
  max-width: 100%;
  width: 430px;
  max-height: 100%;
  background-color: ${(props) => props.theme.colors.neutral200};
  border-radius: 8px;
  overflow-y: auto;
  padding: 16px 24px 48px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ResultsHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 32px;
  margin-right: auto;

  ${TextParagraph} {
    margin-right: 27px;
  }

  ${(props) => `@media${props.theme.device.mobile}`} {
    margin-left: auto;
    margin-right: 0;
  }
`;

const MapWrapper = styled.div`
  z-index: 1;
  max-width: 100%;
  width: 490px;
  height: 100%;
`;

export {
  Container,
  InputSearchContainer,
  StoresContainer,
  MapWrapper,
  ResultsContainer,
  ResultsHeader,
};
