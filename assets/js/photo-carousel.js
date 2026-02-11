document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".photo-carousel");
  const track = document.querySelector(".photo-carousel-track");
  const slides = document.querySelectorAll(".photo-carousel-track img");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  if (!carousel || !track || slides.length === 0) return;

  let currentIndex = 0;

  function updateCarousel() {
    const slideWidth = carousel.clientWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  window.addEventListener("resize", updateCarousel);
});
