document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".photo-carousel-track");
  const slides = document.querySelectorAll(".photo-carousel-track img");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  if (!track) return;

  let currentIndex = 0;

  function updateSlide() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
  });
});
