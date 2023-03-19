import isMobile from "../common/isMobile";
import getImgUrl from "../common/getImgUrl";
import { useState, useEffect } from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src="/images/logo.svg" alt="logo" />
      {window.innerWidth < 400 && (
        <img src="/images/icon-hamburger.svg" alt="menu" />
      )}
      About Services Projects Contact
    </div>
  );
};

export default NavBar;
