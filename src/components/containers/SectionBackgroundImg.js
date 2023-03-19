import getImgUrl from "../../utils/getImgUrl";
import isMobile from "../../utils/isMobile";
import useWindowSize from "../../utils/useWindowSize";
import { MAX_FEATURE_HEIGHT } from "../../utils/global_variables";

const SectionBackgroundImg = (props) => {
  const windowSize = useWindowSize();

  return (
    <div
      className="feature--background-img"
      style={{
        backgroundImage: `url(${getImgUrl(props.feature.image, windowSize)})`,
        height: isMobile()
          ? `${windowSize * (475 / 375)}px`
          : `${windowSize / (1400 / 590)}px`,
        maxHeight: `${MAX_FEATURE_HEIGHT}px`,
      }}
    >
      <h2 className="heading">{props.feature.name}</h2>
      <p>{props.feature.text}</p>
    </div>
  );
};

export default SectionBackgroundImg;
