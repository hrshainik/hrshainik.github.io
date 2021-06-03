import React from "react";
import {
  Anchor,
  Item,
  ListItems,
  Logo,
  Navbar,
  NavbarContainer,
  LogoContainer,
} from "./navbard.styles";
import logo from "../../img/logo.png";

const NavbarD = () => {
  return (
    <NavbarContainer>
      <Navbar>
        <LogoContainer>
          <Logo src={logo} />
        </LogoContainer>
        <ListItems>
          <Item>
            <Anchor
              exact
              to="/"
              activeStyle={{
                color: "var(--primary)",
              }}
            >
              Home
            </Anchor>
          </Item>
          <Item>
            <Anchor
              exact
              to="/portfolio"
              activeStyle={{ color: "var(--primary)" }}
            >
              Portfolio
            </Anchor>
          </Item>
          <Item>
            <Anchor
              exact
              to={{ pathname: "https://dev.to/hrsshainik" }}
              rel="external nofollow"
              target="_blank"
              activeStyle={{
                color: "var(--primary)",
              }}
            >
              Blog
            </Anchor>
          </Item>
          <Item>
            <Anchor
              exact
              to="/contact"
              activeStyle={{
                color: "var(--primary)",
              }}
            >
              Contact
            </Anchor>
          </Item>
        </ListItems>
      </Navbar>
    </NavbarContainer>
  );
};

export default NavbarD;
