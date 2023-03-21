import { TABLET_WIDTH } from "./global_variables";
import isMobile from "./isMobile";

function getImgUrl(imgName, windowSize) {
  const isMobileSize = windowSize < TABLET_WIDTH || isMobile();
  return isMobileSize
    ? `/images/mobile/${imgName}`
    : `/images/desktop/${imgName}`;
}

export default getImgUrl;
