import getImgUrl from "../../utils/getImgUrl";

const SectionFourImages = (props) => {
  const { windowSize } = props;
  const firstImg = "image-gallery-milkbottles";
  const secondImg = "image-gallery-orange";
  const thirdImg = "image-gallery-cone";
  const fourthImg = "image-gallery-sugarcubes";

  return (
    <div>
      <img src={`${getImgUrl(firstImg, windowSize)}`} />
    </div>
  );
};

export default SectionFourImages;
