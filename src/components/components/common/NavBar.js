import isMobile from "../../../utils/isMobile";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src="/images/logo.svg" alt="logo" />
      {isMobile() && <img src="/images/icon-hamburger.svg" alt="menu" />}
      About Services Projects Contact
    </div>
  );
};

export default NavBar;
