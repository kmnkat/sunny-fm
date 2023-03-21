import getImgUrl from "../../../utils/getImgUrl";
import isMobile from "../../../utils/isMobile";
import useWindowSize from "../../../utils/useWindowSize";

const HeroSection = (props) => {
  const windowSize = useWindowSize();

  return (
    <div
      className="hero-section bckground-cover"
      style={{
        backgroundImage: `url(${getImgUrl(props.imgUrl, windowSize)})`,
        height: isMobile()
          ? windowSize * (540 / 375)
          : windowSize * (800 / 1440),
        maxHeight: isMobile() ? "640px" : "800px",
      }}
    >
      <h1 className="motto">{props.title}</h1>
      <img src="/images/icon-arrow-down.svg" alt="arrow" />
    </div>
  );
};

export default HeroSection;
