import getImgUrl from "../../utils/getImgUrl";
import isMobile from "../../utils/isMobile";
import useWindowSize from "../../utils/useWindowSize";
import { MAX_FEATURE_HEIGHT } from "../../utils/global_variables";

const SectionBackgroundImg = (props) => {
  const windowSize = useWindowSize();

  return (
    <div
      className={`feature-background-img bckground-cover feature-background-img--${props.feature.color}`}
      style={{
        backgroundImage: `url(${getImgUrl(props.feature.image, windowSize)})`,
        height: isMobile()
          ? `${windowSize * (MAX_FEATURE_HEIGHT / 375)}px`
          : `${windowSize / (1400 / 590)}px`,
        maxHeight: `${MAX_FEATURE_HEIGHT}px`,
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
