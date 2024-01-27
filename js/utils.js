
export const addImage = (href, alt) => {
  const image = new Image();
  image.src = href;
  image.alt = alt;
  return image;
}

export const swiper = (element, cbLeft, cbRight) => {
  let startX;

  const handleStart = (e) => {
    startX = e.touches[0].clientX;
  }

  const handleMove = (event) => {
    if (!startX) return;

    const endX = event.touches[0].clientX;
    const deltaX = endX - startX;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        cbLeft();
      } else {
        cbRight();
      }
      startX = null;
    }
  }

  element.addEventListener('touchstart', handleStart);
  element.addEventListener('touchmove', handleMove);
}