//pentru sectia  reviewCount am facut un fisier separat

//// plan  propus
/// pas 1 selectam h3 care au id clienti, camere, ani

// const nrClienti = parseInt(clientCount.innerText);
/// pas 2 facem o functie care sa numere de la 0 la valoarea id
/// pas 3 facem un timer care sa faca numaratoarea fluida
/// pas 4 metoda ca animatia sa inceapa doar cand ajungem la acel id pe pagina

// new atempt and it works
let reviewCount = document.querySelector("#reviewCount");
let clientCount = document.querySelectorAll(".counter");

let speed = 100;

// cand ajunge la id reviewCount
// este o metoda noua de a vedea unde esti pe view

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
