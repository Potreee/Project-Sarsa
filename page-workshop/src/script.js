//toggle navbar-sidebar
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const button = document.getElementById("menuButton");
  menu.classList.toggle("hidden");
  button.classList.toggle("rotate-icon");
  button.textContent = menu.classList.contains("hidden") ? "☰" : "X";
}

function openModal(imageSrc) {
  document.getElementById("modalImage").src = imageSrc;
  document.getElementById("imageModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("imageModal").classList.add("hidden");
}