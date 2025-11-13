document.addEventListener("DOMContentLoaded", () => {
  // highlight active nav link
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop();
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) link.classList.add("active");
  });

  // mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navList = document.querySelector(".nav-links");
  menuToggle.addEventListener("click", () => navList.classList.toggle("show"));
});
// Hamburger menu
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Example shared function (like "Back to Top" button)
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
