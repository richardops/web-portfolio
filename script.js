// Mobile Menu Toggle
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

// Toggle menu
menuIcon.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent event bubbling
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
  }
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Modal functionality
const contactBtns = document.querySelectorAll("[data-contact]"); // Select all contact buttons
const modalOverlay = document.getElementById("modalOverlay");
const closeBtn = document.getElementById("close-btn");

function openModal() {
  modalOverlay.classList.add("active");
}

function closeModal() {
  modalOverlay.classList.remove("active");
}

// Event Listeners
contactBtns.forEach((btn) => {
  btn.addEventListener("click", openModal);
});
closeBtn.addEventListener("click", closeModal);

// Close modal when clicking outside
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// Close modal with ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
