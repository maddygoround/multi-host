import React from "react";
import Logo from "../commons/logo/Logo";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles["app-navbar"]}>
      <div className={styles["logo"]}>
        
          <Logo />
        
      </div>
    </div>
  );
};

export default Header;
