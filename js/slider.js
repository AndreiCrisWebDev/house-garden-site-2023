const gallery = document.querySelectorAll(".gall3img figure");
const overlay = document.querySelector(".overlay");
const overlayImg = document.querySelector(".imgOverlay");
const background = getComputedStyle(...gallery);

overlay.addEventListener("click", rmvHide);

[...gallery].forEach((but) => {
  but.addEventListener("click", function () {
    const wClick = getComputedStyle(but);
    overlay.classList.add("hide");
    overlayImg.style.background = wClick.background;
  });
});

function rmvHide() {
  overlay.classList.remove("hide");
}

const slideContainers = document.querySelectorAll(".camParGall");

slideContainers.forEach((slideContainer) => {
  const slide = slideContainer.querySelector(".slides");
  const nextBtn = slideContainer.querySelector("#next-btn");
  const prevBtn = slideContainer.querySelector("#prev-btn");
  let slides = slide.querySelectorAll(".slide");
  const interval = 3000;

  let index = 1;
  let slideId;

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.id = "first-clone";
  lastClone.id = "last-clone";

  slide.append(firstClone);
  slide.prepend(lastClone);

  const slideWidth = slides[index].clientWidth;

  slide.style.transform = `translateX(${-slideWidth * index}px)`;

  const startSlide = () => {
    slideId = setInterval(() => {
      moveToNextSlide();
    }, interval);
  };

  const getSlides = () => slide.querySelectorAll(".slide");

  slide.addEventListener("transitionend", () => {
    slides = getSlides();
    if (slides[index].id === firstClone.id) {
      slide.style.transition = "none";
      index = 1;
      slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }

    if (slides[index].id === lastClone.id) {
      slide.style.transition = "none";
      index = slides.length - 2;
      slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
  });

  const moveToNextSlide = () => {
    slides = getSlides();
    if (index >= slides.length - 1) return;
    index++;
    slide.style.transition = ".7s ease-out";
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  };

  const moveToPreviousSlide = () => {
    if (index <= 0) return;
    index--;
    slide.style.transition = ".7s ease-out";
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  };

  slideContainer.addEventListener("mouseenter", () => {
    clearInterval(slideId);
  });

  slideContainer.addEventListener("mouseleave", startSlide);
  nextBtn.addEventListener("click", moveToNextSlide);
  prevBtn.addEventListener("click", moveToPreviousSlide);

  startSlide();
});

//The function selects all elements with class name camParGall using the querySelectorAll method, and then iterates over each element using the forEach method. For each container element, it selects the slide element, next button element, and previous button element using the querySelector method.

//Next, it creates a clone of the first and last slides using the cloneNode method, and assigns a unique ID to each of these clones. It then appends the first clone to the end of the slide element, and prepends the last clone to the beginning of the slide element.

///The function sets the initial index to 1 and the initial slide ID to undefined. It then defines a function startSlide that sets the slide ID to the result of calling setInterval with a callback function moveToNextSlide and a specified interval of 3000 milliseconds.

// The function also defines a function getSlides that returns a list of all slide elements within the container element.

// The function then adds an event listener to the slide element that listens for the transitionend event. When this event is triggered, the function checks whether the current slide is the first or last clone, and if so, sets the transition property to "none" and adjusts the index and slide position accordingly.

// The function also defines two functions moveToNextSlide and moveToPreviousSlide that adjust the slide position and index accordingly. moveToNextSlide checks if the current index is greater than or equal to the length of the slide list minus 1, and if not, increments the index and adjusts the slide position. moveToPreviousSlide checks if the current index is less than or equal to 0, and if not, decrements the index and adjusts the slide position.

// Finally, the function adds event listeners to the container element for mouseenter and mouseleave events, and to the next and previous buttons for click events. The mouseenter event listener clears the slide interval using clearInterval, and the mouseleave event listener restarts the slide interval by calling startSlide. The click event listeners call moveToNextSlide and moveToPreviousSlide, respectively.

// Overall, this function creates a simple image slider that automatically scrolls through a list of images at a specified interval, and allows the user to manually navigate forwards and backwards through the list using next and previous buttons.
