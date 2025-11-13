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
