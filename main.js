const navToggel=document.querySelector(".mobile-nav");
const primaryNav = document.querySelector("primary-navigation");

navToggel.addEventListener('click', ()=> {
  primaryNav.classList.toggle("opened");
})