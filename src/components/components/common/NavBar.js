import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import isMobile from "../../../utils/isMobile";

const NavBar = () => {
  return (
    <div className="navbar">
      <ReactSVG src="/images/logo.svg" />
      {isMobile() && <img src="/images/icon-hamburger.svg" alt="menu" />}
      {!isMobile() && (
        <div className="navbar__links">
          <Link to="/" className="navbar__links-element">
            About
          </Link>
          <Link to="/" className="navbar__links-element">
            Services
          </Link>
          <Link to="/" className="navbar__links-element">
            Projects
          </Link>
          <button className="btn-secondary">
            <Link
              to="/"
              className="navbar__links-element button-text--secondary"
            >
              <span className="button-text--secondary">Contact</span>
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
