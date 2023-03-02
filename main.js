const toggleNavBtn = document.getElementById('toggle-nav');
const body = document.querySelector('body');

console.log(toggleNavBtn)

const nav = document.querySelector("nav");

function toggleNav() {
  nav.classList.toggle("show");
  body.classList.toggle('remove');
}

toggleNavBtn.addEventListener("click", toggleNav);

window.addEventListener("resize", function() {
  if (window.innerWidth > 1200) {
    nav.classList.remove("show");
  }
});
