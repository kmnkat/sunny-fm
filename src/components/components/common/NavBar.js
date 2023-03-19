import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import isMobile from "../../../utils/isMobile";

const NavBar = () => {
  return (
    <div className="navbar">
      <embed src="/images/logo.svg" />
      {isMobile() && <img src="/images/icon-hamburger.svg" alt="menu" />}
      {!isMobile() && (
        <div className="navbar__links">
          <Link to="/">About</Link>
          <Link to="/">Services</Link>
          <Link to="/">Projects</Link>
          <Link to="/">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
