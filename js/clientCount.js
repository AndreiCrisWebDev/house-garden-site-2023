//pentru sectia  reviewCount am facut un fisier separat
// new atempt and it works
let reviewCount = document.querySelector("#reviewCount");
let clientCount = document.querySelectorAll(".counter");

let speed = 100;
let CounterObserver = new IntersectionObserver(
  (entries) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    clientCount.forEach((counter) => {
      function updateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerHTML;
        const intPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
          counter.innerHTML = Math.ceil(initialNumber + intPerCount);
          setTimeout(updateCounter, 150);
        }
      }
      updateCounter();
    });
  },
  {
    root: null,
    threshold: 0.4,
  }
);
CounterObserver.observe(reviewCount);
