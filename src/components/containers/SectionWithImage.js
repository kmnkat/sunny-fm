import getImgUrl from "../../utils/getImgUrl";
import useWindowSize from "../../utils/useWindowSize";

const SectionWithImage = (props) => {
  const windowSize = useWindowSize();
  return (
    <div className="feature--text-and-img">
      <img src={`${getImgUrl(props.feature.image, windowSize)}`} />
      <h2 className="heading">{props.feature.name}</h2>
      <p>{props.feature.text}</p>
      <button className="button-text">Learn more</button>
    </div>
  );
};

export default SectionWithImage;
