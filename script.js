document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("reviewsTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dots = document.querySelectorAll(".dot");

  if (!track || !prevBtn || !nextBtn) return;

  let currentIndex = 0;

  const updateCarousel = () => {
    const card = track.querySelector(".review-card");
    if (!card) return;

    const cardWidth = card.offsetWidth + 20; // 20px gap
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    // Update dots
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentIndex);
    });
  };

  nextBtn.addEventListener("click", () => {
    const totalCards = track.querySelectorAll(".review-card").length;
    const visibleCards = Math.round(
      track.parentElement.offsetWidth /
        track.querySelector(".review-card").offsetWidth,
    );

    if (currentIndex < totalCards - visibleCards) {
      currentIndex++;
    } else {
      currentIndex = 0; // დაბრუნება დასაწყისში
    }
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  window.addEventListener("resize", updateCarousel);
});
