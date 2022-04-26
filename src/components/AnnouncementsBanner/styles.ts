// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from "styled-components/macro";

import { NikeSKNRSIcon, TextParagraph } from "components/Lib";

const Container = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: theme.colors.neutral200,
  height: "40px",

  [`@media${theme.device.mobile}`]: {
    height: "54px",
  },
}));

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 25px;

  ${NikeSKNRSIcon} {
    margin-right: 24px;
  }

  ${TextParagraph} {
    span {
      text-decoration: underline;
    }
  }

  ${(props) => `@media${props.theme.device.mobile}`} {
    flex-direction: column;
    height: 54px;

    ${NikeSKNRSIcon} {
      margin-right: 0;
    }
  }
`;

export { Container, Content };
