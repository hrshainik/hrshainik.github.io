import React from "react";
import { Nav, NavLink } from "./navbar.styles";
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
    <Nav>
      <NavLink to="/">
        <BiHomeHeart style={navIconStyles} />
        Home
      </NavLink>
      <NavLink to="/portfolio">
        <AiOutlineProfile style={navIconStyles} />
        Portfolio
      </NavLink>
      <NavLink to="/blog">
        <ImBlog style={navIconStyles} />
        Blog
      </NavLink>
      <NavLink to="/contact">
        <MdPermContactCalendar style={navIconStyles} />
        Contact
      </NavLink>
    </Nav>
  );
};

export default Navbar;
