
export const addImage = (href, alt) => {
  const image = new Image();
  image.src = href;
  image.alt = alt;
  return image;
}