document.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const id = this.getAttribute("href");
      const target = document.querySelector(id);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

//
function toggleServMenu() {
  document
    .querySelector(".service__modal")
    .classList.toggle("service__modal-active");
}

function toggleNavMenu() {
  document
    .querySelector(".mob__menu")
    .classList.toggle("mob__menu-active");
}
