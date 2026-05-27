const IMAGES_PATH = "/images";

export const IMAGES = {
  patternDark: `${IMAGES_PATH}/pattern-dark-bg.svg`,
  patternLight: `${IMAGES_PATH}/pattern-light-bg.svg`,
  arrowDown: `${IMAGES_PATH}/icon-arrow-down.svg`,
  arrowUp: `${IMAGES_PATH}/icon-arrow-up.svg`,
};

export const getPath = (imageName: string) => `${IMAGES_PATH}/${imageName}`;
