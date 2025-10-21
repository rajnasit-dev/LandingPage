const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


gsap.from(".about .container", {
  y:110,
  opacity:0,
  duration:1,
  delay:1,
})