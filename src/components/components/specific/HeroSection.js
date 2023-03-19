import getImgUrl from "../../../utils/getImgUrl";
import isMobile from "../../../utils/isMobile";
import useWindowSize from "../../../utils/useWindowSize";

const HeroSection = (props) => {
  const windowSize = useWindowSize();

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${getImgUrl(props.imgUrl, windowSize)})`,
        height: isMobile()
          ? windowSize * (375 / 340)
          : windowSize / (640 / 1440),
        maxHeight: "640px",
      }}
    >
      <h1 className="motto">{props.title}</h1>
      <img src="/images/icon-arrow-down.svg" alt="arrow" />
    </div>
  );
};

export default HeroSection;
