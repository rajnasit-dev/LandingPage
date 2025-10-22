const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
raf();

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

gsap.from(".about .container", {
  y: 110,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about .container",
    start: "top 80%",
    end: "top 30%",
    scrub: 1,
  },
});

gsap.from(".features .feature", {
  y: 90,
  opacity: 0,
  duration: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: ".features .feature",
    start: "top 80%",
    end: "top 30%",
    scrub: 1,
  },
});
