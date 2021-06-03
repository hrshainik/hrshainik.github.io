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

const Footer = ({ style, isMobile }) => {
  return (
    <FooterContainer style={style} isMobile={isMobile}>
      <UpperSec>
        <LogoWrapper to="/">
          <Logo src={logo} alt="logo" />
        </LogoWrapper>
        <LinkWrapper>
          <LinkItem>
            <Anchor
              href="https://github.com/hrshainik/"
              target="_blank"
              rel="external nofollow"
            >
              github
            </Anchor>
          </LinkItem>
          <LinkItem>
            <Anchor
              href="https://instagram.com/traveloperhabib/"
              target="_blank"
              rel="external nofollow"
            >
              instagram
            </Anchor>
          </LinkItem>
          <LinkItem>
            <Anchor
              href="hrrps://twitter.com/hrsshainik/"
              target="_blank"
              rel="external nofollow"
            >
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
