import React from "react";
import {
  Anchor,
  FooterContainer,
  LightText,
  LinkItem,
  LinkWrapper,
  Logo,
  LogoWrapper,
  UpperSec,
} from "./footer.styles";
import logo from "../../img/logo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <UpperSec>
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
      </UpperSec>
      <LightText>@2021 - Habibur Rahman. All right reserved.</LightText>
    </FooterContainer>
  );
};

export default Footer;
