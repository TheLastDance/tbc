
export const addImage = (href, alt) => {
  const image = new Image();
  image.src = href;
  image.alt = alt;
  return image;
}

export const HorizontalSwiper = (element, cbLeft, cbRight) => {
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

export const VerticalSwiper = (element, cbUp, cbDown) => {
  let startY;

  const handleStart = (e) => {
    startY = e.touches[0].clientY;
  }

  const handleMove = (event) => {
    if (!startY) return;

    const endY = event.touches[0].clientY;
    const deltaY = endY - startY;

    if (Math.abs(deltaY) > 0) {
      if (deltaY > 0) {
        cbUp();
      } else {
        cbDown();
      }
      startY = null;
    }
  }

  element.addEventListener('touchstart', handleStart);
  element.addEventListener('touchmove', handleMove);
}