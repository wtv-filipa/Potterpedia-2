import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Logo from "../../imgs/logo.png";
import "../../styles/nav.css";
import "../../styles/general.css";
import useAuthentication from "../../hooks/useAuthentication";
import { useAuth0 } from "@auth0/auth0-react";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { user, isAuthenticated } = useAuth0();
  const { logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  useAuthentication();
  useEffect(() => {
    const onScroll = () => {
      const nav = document.querySelector(".nav");
      if (!nav) {
        return;
      }

      if (window.pageYOffset > 0) {
        nav.classList.add("add-shadow");
        nav.classList.add("add-color");
      } else {
        nav.classList.remove("add-shadow");
        nav.classList.remove("add-color");
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <Navbar className="nav" scrolling light expand="md" fixed="top">
        <div className="container">
          <NavbarBrand className="logoSizenav">
            <Link to="/">
              <img className="logoSize" src={Logo} alt="logo" />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/quotes">
                  <NavLink style={{ color: "white", textDecoration: "none" }}>
                    Quotes
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/characters">
                  <NavLink style={{ color: "white", textDecoration: "none" }}>
                    Characters
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/houses">
                  <NavLink style={{ color: "white", textDecoration: "none" }}>
                    Houses
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/spells">
                  <NavLink style={{ color: "white", textDecoration: "none" }}>
                    Spells
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/sortinghat">
                  <NavLink style={{ color: "white", textDecoration: "none" }}>
                    Sorting Hat
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/forum">
                  <NavLink style={{ color: "white", textDecoration: "none" }}>
                    Forum
                  </NavLink>
                </Link>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              {isAuthenticated ? (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle
                    nav
                    caret
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {user.nickname}
                  </DropdownToggle>
                  <DropdownMenu right style={{ backgroundColor: "black" }}>
                    <DropdownItem className="hover" style={{ color: "white !important" }}>
                      <Link className="hover white" to="/saved">
                        <i class="far fa-star pr-2"></i> Saved characters
                      </Link>
                    </DropdownItem>
                    <DropdownItem
                      className="hover"
                      style={{ color: "white" }}
                      onClick={() => logout()}
                    >
                      <i class="fas fa-sign-out-alt pr-2"></i> Log out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              ) : (
                <NavItem onClick={() => loginWithRedirect()}>
                  <NavLink
                    style={{
                      color: "white",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    <i class="fas fa-user"></i> Log in
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Example;
