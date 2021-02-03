import React from "react";
import {
  Anchor,
  FooterContainer,
  LinkItem,
  LinkWrapper,
  Logo,
  LogoWrapper,
} from "./footer.styles";
import logo from "../../img/logo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <LogoWrapper to="/">
        <Logo src={logo} />
      </LogoWrapper>
      <LinkWrapper>
        <LinkItem>
          <Anchor href="https://github.com/hrshainik/" target="_blank">
            github
          </Anchor>
        </LinkItem>
        <LinkItem>
          <Anchor href="https://instagram.com/hrsshainik/" target="_blank">
            instagram
          </Anchor>
        </LinkItem>
        <LinkItem>
          <Anchor href="hrrps://twitter.com/hrsshainik/" target="_blank">
            twitter
          </Anchor>
        </LinkItem>
      </LinkWrapper>
    </FooterContainer>
  );
};

export default Footer;
