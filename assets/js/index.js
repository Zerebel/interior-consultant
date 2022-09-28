// Variables
const btnMenu = document.querySelector("#btnMenu");
const btnClose = document.querySelector("#btnClose");
const mobileNav = document.querySelector("#mobile-nav");
const footer = document.querySelector("footer");
const main = document.querySelector("main");
// Events
btnMenu.addEventListener("click", (e) => {
  if (mobileNav.classList.contains("hidden")) footer.classList.add("hidden");
  main.classList.add("hidden");
  return mobileNav.classList.remove("hidden");
});

btnClose.addEventListener("click", (e) => {
  footer.classList.remove("hidden");
  main.classList.remove("hidden");
  return mobileNav.classList.add("hidden");
});
