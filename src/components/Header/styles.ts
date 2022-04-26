import styled from "styled-components";

import { BagIcon, NikeIcon, SNKRSIcon, Link } from "components/Lib";

const TopBar = styled.header({
  position: "fixed",
  width: "100%",
  zIndex: "20",
});

const LinkHeader = styled(Link)(({ theme }) => ({
  fontFamily: theme.fontFamily.primary,
  fontWeight: theme.fontWeight.medium,
  color: theme.colors.primary,
  fontSize: theme.fontSize.medium,
  lineHeight: theme.lineHeight.medium,
  margin: "0",
}));

const NavDesktop = styled.div`
  padding: 16px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral200};

  ${SNKRSIcon} {
    margin-left: 19.4px;
  }

  ${Link} {
    margin-left: 16px;
  }
`;

const LinksContainer = styled.div({
  marginLeft: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});

const CategoriesBar = styled.div`
  padding: 0 40px;
  height: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral100};

  ${BagIcon} {
    margin-left: 18px;
    margin-right: 29px;
  }
`;

const CategoriesContainer = styled.div`
  margin-left: auto;
  margin-right: auto;

  ${LinkHeader} {
    &:first-child {
      margin-left: 78px;
    }
    margin-left: 24px;
  }
`;

const NavMobile = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral100};

  ${NikeIcon} {
    width: 39px;
    height: 13px;
  }

  ${BagIcon} {
    margin-left: auto;
    margin-right: 29px;
  }
`;

const VerticalLine = styled.div((props) => ({
  borderLeft: `1px solid ${props.theme.colors.neutral500}`,
  height: "15px",
  marginLeft: "16px",
}));

const VerticalSpace = styled.div(({ theme }) => ({
  height: "128px",
  [`@media${theme.device.mobile}`]: {
    height: "56px",
  },
}));

export {
  TopBar,
  Link,
  VerticalLine,
  LinksContainer,
  NavMobile,
  NavDesktop,
  CategoriesBar,
  CategoriesContainer,
  LinkHeader,
  VerticalSpace,
};
