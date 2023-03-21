import getImgUrl from "../../utils/getImgUrl";
import isMobile from "../../utils/isMobile";
import useWindowSize from "../../utils/useWindowSize";
import {
  MAX_FEATURE_HEIGHT,
  MAX_FEATURE_HEIGHT_DESKTOP,
  MOBILE_REF_SIZE,
  DESKTOP_REF_SIZE,
} from "../../utils/global_variables";

const SectionWithImage = (props) => {
  const windowSize = useWindowSize();
  return (
    <div
      className={`feature-text-and-img feature-text-and-img--${props.feature.color} feature-text-and-img--${props.feature.textBoxAlign}`}
    >
      <div
        className={`feature-text-and-img__img`}
        style={{
          backgroundImage: `url(${getImgUrl(props.feature.image, windowSize)})`,
          width: "100%",
          height: isMobile()
            ? `${windowSize * (MAX_FEATURE_HEIGHT / MOBILE_REF_SIZE)}px`
            : `${
                windowSize / (DESKTOP_REF_SIZE / MAX_FEATURE_HEIGHT_DESKTOP)
              }px`,
          maxHeight: `${MAX_FEATURE_HEIGHT}px`,
        }}
      ></div>
      <div className="feature__copytext">
        <h2 className="heading">{props.feature.name}</h2>
        <p>{props.feature.text}</p>
        <button
          className={`btn-main button-text btn-main--${props.feature.color}`}
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

export default SectionWithImage;
