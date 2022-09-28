// Variables
const btnMenu = document.querySelector("#btnMenu");
const btnClose = document.querySelector("#btnClose");
const mobileNav = document.querySelector("#mobile-nav");
// Events
btnMenu.addEventListener("click", (e) => {
  if (mobileNav.classList.contains("hidden"))
    return mobileNav.classList.remove("hidden");
});

btnClose.addEventListener("click", (e) => {
  return mobileNav.classList.add("hidden");
});
