document.querySelector("#whatzapButton").addEventListener("click", () => {
  window.location.assign("https://wa.me/+40748527089");
});

document.querySelector("#locationButton").addEventListener("click", () => {
  window.location.href = "https://goo.gl/maps/c8aM4j3GDJuexaTh6";
});
document.querySelector("#rezerva_acuma").addEventListener("click", () => {
  window.location.href = "https://wa.me/+40748527089";
});
document.querySelector("#btn_obiective").addEventListener("click", () => {
  window.location.href = "obiectiveTuristice.html";
});
function homePage() {
  window.location.assign("index.html");
}

/// refresh function
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

window.addEventListener("resize", function () {
  delay(1000).then(function () {
    location.reload();
  });
});

// SCROLL FUNCTION

const contactBtn = document.querySelector("#contButton");
const contacteaza = document.querySelector("#contactează-ne");
contactBtn.addEventListener("click", () => {
  contacteaza.scrollIntoView({
    behavior: "smooth",
    easing: "linear",
  });
});
