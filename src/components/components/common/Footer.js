import { logDOM } from "@testing-library/react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

const Footer = () => {
  return (
    <div className="footer">
      <ReactSVG src="/images/logo.svg" />
      <div className="footer__links">
        <Link to="/">About</Link>
        <Link to="/">Services</Link>
        <Link to="/">Projects</Link>
      </div>
      <div className="footer__socials">
        <ReactSVG src="/images/icon-facebook.svg" alt="facebook" />
        <ReactSVG src="/images/icon-instagram.svg" alt="instagram" />
        <ReactSVG src="/images/icon-twitter.svg" alt="twitter" />
        <ReactSVG src="/images/icon-pinterest.svg" alt="pinterest" />
      </div>
    </div>
  );
};

export default Footer;
