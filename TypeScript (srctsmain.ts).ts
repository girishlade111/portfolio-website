// Scroll Spy & Animations
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.id;
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href")?.slice(1) === id);
      });
    }
  });
}, { threshold: 0.6 });

sections.forEach(section => observer.observe(section));

// Particle Background
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: "#ffffff",
    shape: "circle",
    opacity: 0.5,
    size: { value: 3 },
    line_linked: { enable: true, distance: 150 }
  }
});

// Theme Toggle
const toggleTheme = () => {
  document.body.classList.toggle("dark-theme");
  localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
};

if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark-theme");