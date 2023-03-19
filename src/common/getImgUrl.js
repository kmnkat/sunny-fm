function getImgUrl(isMobile) {
  return isMobile ? `images/mobile/` : `images/desktop/`;
}

export default getImgUrl;
