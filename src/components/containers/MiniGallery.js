import getImgUrl from "../../utils/getImgUrl";
import useWindowSize from "../../utils/useWindowSize";

const MiniGallery = (props) => {
  const windowSize = useWindowSize();

  const firstImg = "image-gallery-milkbottles.jpg";
  const secondImg = "image-gallery-orange.jpg";
  const thirdImg = "image-gallery-cone.jpg";
  const fourthImg = "image-gallery-sugarcubes.jpg";

  return (
    <div>
      <img src={`${getImgUrl(firstImg, windowSize)}`} alt={firstImg} />
      <img src={`${getImgUrl(secondImg, windowSize)}`} alt={secondImg} />
      <img src={`${getImgUrl(thirdImg, windowSize)}`} alt={thirdImg} />
      <img src={`${getImgUrl(fourthImg, windowSize)}`} alt={fourthImg} />
    </div>
  );
};

export default MiniGallery;
