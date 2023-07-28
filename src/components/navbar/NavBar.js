import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import "./navbar.css";
import logo from "../../assets/logo.svg";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menu = () => (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgtp">What is GTP?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );

  return (
    <div className="gtp3__navbar">
      <div className="gtp3__navbar-links">
        <div className="gtp3__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="gtp3__navbar-links-container">{menu()}</div>
      <div className="gtp3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gtp3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu && (
          <div className="gtp3__navbar-menu-container scale-up-center">
            <div className="gtp3__navbar-menu-container-links">{menu()}</div>
            <div className="gtp3__navbar-menu-container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
