document.addEventListener("DOMContentLoaded", () => {
  
  const toggle = document.querySelector(".navbar-burger, .toggle-button");
  const menu = document.querySelector(".navbar-menu, .menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      // Toggle the active class
      toggle.classList.toggle("is-active");
      menu.classList.toggle("is-active");
    });
  }
});