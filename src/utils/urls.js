export const API_URL = "https://hrshainik.herokuapp.com";

/**
 * Given an image return the url
 * Works locally and deployed strapi
 * @param {any} image
 */
export const fromImgToUrl = (image) => {
  if (!image) {
    return "/";
  }

  if (image.url.indexOf("/") === 0) {
    return `${API_URL}${image.url}`;
  }

  return image.url;
};
