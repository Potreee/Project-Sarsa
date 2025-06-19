// Swiper untuk flipbook pricelist
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiperPricelist", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: false,
    effect: "slide", // bisa diganti "fade" jika mau
    allowTouchMove: true,
  });

  function openModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  modalImg.src = imageSrc;
  modal.classList.remove("hidden");
}

function closeModal() {
  document.getElementById("imageModal").classList.add("hidden");
}

});
