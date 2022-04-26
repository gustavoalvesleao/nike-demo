import styled from "styled-components";

import { TextHeader, Button } from "components/Lib";

const AccordionContainer = styled.div`
  width: 100%;
`;

const AccordionItemContainer = styled.div`
  border-top: solid 1px ${(props) => props.theme.colors.neutral300};
  border-bottom: solid 1px ${(props) => props.theme.colors.neutral300};
  width: 100%;
  text-align: left;

  ${TextHeader} {
    font-size: ${(props) => props.theme.fontSize.small};
    color: ${(props) => props.theme.colors.neutral100};
    font-weight: ${(props) => props.theme.fontWeight.regular};
  }

  ${Button} {
    width: 100%;
    border: none;
    background-color: ${(props) => props.theme.colors.neutral700};
    border-radius: 0;
    padding: 17.5px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  } ;
`;

const AccordionContentContainer = styled.div`
  height: 0;
  overflow: hidden;
  transition: height ease 0.2s;
`;

export {
  AccordionItemContainer,
  AccordionContentContainer,
  AccordionContainer,
};
