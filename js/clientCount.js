//pentru sectia  reviewCount am facut un fisier separat

//// plan  propus
/// pas 1 selectam h3 care au id clienti, camere, ani
let counter = 109;
let clientCount = document.querySelector("#reviewCount h3 span");
// const nrClienti = parseInt(clientCount.innerText);
/// pas 2 facem o functie care sa numere de la 0 la valoarea id
/// pas 3 facem un timer care sa faca numaratoarea fluida
/// pas 4 metoda ca animatia sa inceapa doar cand ajungem la acel id pe pagina

// count = (i) => {
//   for (let i = 0; i < nrClienti.length; i++) {}
// };
// (function () {
//   let sec;
//   counter = setInterval(() => {
//     clientCount.innerHTML = sec;
//     sec++;
//   }, 100);
// })();

etInterval(
  {
    function() {
      counter++;
      if (counter > "109") {
        counter = clientCount.innerHTML;
      }
    },
  },
  100
);
