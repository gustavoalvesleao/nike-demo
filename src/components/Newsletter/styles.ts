import styled from "styled-components";

import { NikeIcon, TextHeader, TextParagraph } from "components/Lib";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.neutral200};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 232px 64px 232px;
  text-align: center;

  ${NikeIcon} {
    margin-bottom: 24.6px;
  }

  ${TextHeader} {
    margin-bottom: 8px;
  }

  ${TextParagraph} {
    margin-bottom: 16px;
  }

  ${(props) => `@media${props.theme.device.mobile}`} {
    padding: 64px 16px 64px 16px 
  },
`;

export { Container };
