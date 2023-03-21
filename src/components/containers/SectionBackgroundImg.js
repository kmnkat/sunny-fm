import getImgUrl from "../../utils/getImgUrl";
import isMobile from "../../utils/isMobile";
import useWindowSize from "../../utils/useWindowSize";
import {
  MAX_FEATURE_HEIGHT,
  MAX_FEATURE_HEIGHT_DESKTOP,
  MOBILE_REF_SIZE,
  DESKTOP_REF_SIZE,
} from "../../utils/global_variables";

const SectionBackgroundImg = (props) => {
  const windowSize = useWindowSize();

  return (
    <div
      className={`feature-background-img bckground-cover feature-background-img--${props.feature.color}`}
      style={{
        backgroundImage: `url(${getImgUrl(props.feature.image, windowSize)})`,
        height: isMobile()
          ? `${windowSize * (MAX_FEATURE_HEIGHT / MOBILE_REF_SIZE)}px`
          : `${windowSize / (DESKTOP_REF_SIZE / MAX_FEATURE_HEIGHT_DESKTOP)}px`,
        maxHeight: isMobile()
          ? `${MAX_FEATURE_HEIGHT}px`
          : `${MAX_FEATURE_HEIGHT_DESKTOP}px`,
      }}
    >
      <div className="feature__copytext">
        <h2 className="heading">{props.feature.name}</h2>
        <p>{props.feature.text}</p>
      </div>
    </div>
  );
};

export default SectionBackgroundImg;
