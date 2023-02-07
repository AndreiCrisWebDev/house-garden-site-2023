document.querySelector("#whatzapButton").addEventListener("click", () => {
  window.location.assign("https://wa.me/+40748527089");
});

document.querySelector("#locationButton").addEventListener("click", () => {
  window.location.href = "https://goo.gl/maps/c8aM4j3GDJuexaTh6";
});
document.querySelector("#contButton").addEventListener("click", () => {
  scroll(0, 20000, "smooth");
});
document.querySelector("#rezerva_acuma").addEventListener("click", () => {
  window.location.href = "https://wa.me/+40748527089";
});
document.querySelector("#btn_obiective").addEventListener("click", () => {
  window.location.href = "obiectiveTuristice.html";
});
// const homeBtn = document.getElementById("main_page");
// addEventListener("click", () => {
//   window.location.href = "index.html";
//});
function homePage() {
  window.location.assign("index.html");
}
