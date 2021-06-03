export const API_URL =
  process.env.REACT_PUBLIC_API_URL || "http://localhost:1337";

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
