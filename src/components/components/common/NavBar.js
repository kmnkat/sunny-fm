import { Link } from "react-router-dom";

import isMobile from "../../../utils/isMobile";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src="/images/logo.svg" alt="logo" />
      {isMobile() && <img src="/images/icon-hamburger.svg" alt="menu" />}
      <Link to="/">About</Link>
      <Link to="/">Services</Link>
      <Link to="/">Projects</Link>
      <Link to="/">Contact</Link>
    </div>
  );
};

export default NavBar;
