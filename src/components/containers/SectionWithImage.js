import getImgUrl from "../../utils/getImgUrl";
import useWindowSize from "../../utils/useWindowSize";

const SectionWithImage = (props) => {
  const windowSize = useWindowSize();
  return (
    <div
      className={`feature-text-and-img feature-text-and-img--${props.feature.color}`}
    >
      <img
        src={`${getImgUrl(props.feature.image, windowSize)}`}
        className="img-full-width"
      />
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
