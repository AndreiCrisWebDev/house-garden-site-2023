const slideContainer = document.querySelector(".camParGall");
const slide = document.querySelector(".slides");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
let slides = document.querySelectorAll(".slide");
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

const getSlides = () => document.querySelectorAll(".slide");

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

/// facem un overlay peste gall3ing
/// layout

/// odata ce facem un click pe figure
const gallery = document.querySelectorAll(".gall3img figure");
const overlay = document.querySelector(".overlay");
const overlayImg = document.querySelector(".imgOverlay");

const background = getComputedStyle(...gallery);
// console.log(background.background);
// gallery.addEventListener("click", toggleOverlay);
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
/// vrem sa adugam un div cu overlay

/// vrem sa aaugam in overlay un figure cu imaginea pe care am dat click
/// vrem sa putem da click pe overlay ca sa facem exit
