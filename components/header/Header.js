import React from "react";
import Logo from "../commons/logo/Logo";
require("./Header.less");

const Header = () => {
  return (
    <div className="app-navbar">
      <div className="logo">
        <a href="/">
          <Logo />
        </a>
      </div>
    </div>
  );
};

export default Header;
