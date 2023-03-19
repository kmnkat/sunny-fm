import useWindowSize from "../../utils/useWindowSize";
import getImgUrl from "../../utils/getImgUrl";
import isMobile from "../../utils/isMobile";

const SectionBackgroundImg = (props) => {
  const windowSize = useWindowSize();
  const imgUrl =
    "https://images.pexels.com/photos/14939897/pexels-photo-14939897.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load";
  console.log(imgUrl);
  return (
    <div
      className="feature--background-img"
      style={{
        backgroundImage: `url(${getImgUrl(props.feature.image, windowSize)})`,
        minHeight: isMobile() ? windowSize * 1.25 : windowSize / 2.44,
      }}
    >
      SOMETHING
    </div>
  );
};

export default SectionBackgroundImg;
