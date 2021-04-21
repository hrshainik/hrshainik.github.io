import React from "react";
import { NavContainer, Nav, NavAnchor } from "./navbar.styles";
import { BiHomeHeart } from "react-icons/bi";
import { MdPermContactCalendar } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
import { ImBlog } from "react-icons/im";

const Navbar = () => {
  const navIconStyles = {
    fontSize: "3rem",
    marginBottom: "0.5rem",
  };

  return (
    <NavContainer>
      <Nav>
        <NavAnchor
          exact
          to="/"
          activeStyle={{
            color: "var(--primary)",
          }}
        >
          <BiHomeHeart style={navIconStyles} />
          Home
        </NavAnchor>
        <NavAnchor
          exact
          to="/portfolio"
          activeStyle={{
            color: "var(--primary)",
          }}
        >
          <AiOutlineProfile style={navIconStyles} />
          Portfolio
        </NavAnchor>
        <NavAnchor
          exact
          to={{ pathname: "https://dev.to/hrsshainik" }}
          target="_blank"
          activeStyle={{
            color: "var(--primary)",
          }}
        >
          <ImBlog style={navIconStyles} />
          Blog
        </NavAnchor>
        <NavAnchor
          exact
          to="/contact"
          activeStyle={{
            color: "var(--primary)",
          }}
        >
          <MdPermContactCalendar style={navIconStyles} />
          Contact
        </NavAnchor>
      </Nav>
    </NavContainer>
  );
};

export default Navbar;
