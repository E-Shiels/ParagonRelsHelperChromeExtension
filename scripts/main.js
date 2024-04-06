function handleKeydown(evt) {
  try {
    const arrows = document.querySelectorAll(".rsArrowIcn");
    if (arrows.length !== 0) {
      switch (evt.code) {
        case "ArrowRight":
          arrows[1].click();
          break;
        case "ArrowLeft":
          arrows[0].click();
          break;
      }
    }
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("keydown", handleKeydown);
