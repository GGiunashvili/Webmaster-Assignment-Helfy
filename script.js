document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================
     1. Reviews / Testimonials Slider
     ========================================== */
  const reviewsTrack = document.getElementById("reviewsTrack");
  const reviewsPrevBtn = document.getElementById("prevBtn");
  const reviewsNextBtn = document.getElementById("nextBtn");
  const reviewsDots = document.querySelectorAll(".carousel-dots .dot");

  if (reviewsTrack && reviewsPrevBtn && reviewsNextBtn) {
    let currentReviewIndex = 0;

    const updateReviewsCarousel = () => {
      const card = reviewsTrack.querySelector(".review-card");
      if (!card) return;

      const cardWidth = card.offsetWidth + 20; // 20px gap
      reviewsTrack.style.transform = `translateX(-${currentReviewIndex * cardWidth}px)`;

      // Dots highlight
      reviewsDots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === currentReviewIndex);
      });
    };

    reviewsNextBtn.addEventListener("click", () => {
      const totalCards = reviewsTrack.querySelectorAll(".review-card").length;
      const card = reviewsTrack.querySelector(".review-card");
      const visibleCards = card
        ? Math.round(reviewsTrack.parentElement.offsetWidth / card.offsetWidth)
        : 1;

      if (currentReviewIndex < totalCards - visibleCards) {
        currentReviewIndex++;
      } else {
        currentReviewIndex = 0;
      }
      updateReviewsCarousel();
    });

    reviewsPrevBtn.addEventListener("click", () => {
      if (currentReviewIndex > 0) {
        currentReviewIndex--;
      } else {
        currentReviewIndex = 0;
      }
      updateReviewsCarousel();
    });

    reviewsDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentReviewIndex = index;
        updateReviewsCarousel();
      });
    });

    window.addEventListener("resize", updateReviewsCarousel);
  }

  /* ==========================================
     2. "How It Works" Steps Slider (Mobile)
     ========================================== */
  const stepsTrack = document.getElementById("stepsTrack");
  const stepsPrevBtn = document.getElementById("stepsPrevBtn");
  const stepsNextBtn = document.getElementById("stepsNextBtn");
  const stepsDots = document.querySelectorAll("#stepsDots .dot");

  if (stepsTrack && stepsPrevBtn && stepsNextBtn) {
    let currentStep = 0;
    const totalSteps = stepsTrack.querySelectorAll(".step-card").length;

    const updateStepsSlider = () => {
      if (window.innerWidth <= 900) {
        stepsTrack.style.transform = `translateX(-${currentStep * 100}%)`;
      } else {
        stepsTrack.style.transform = "none";
      }

      stepsDots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === currentStep);
      });
    };

    stepsNextBtn.addEventListener("click", () => {
      if (currentStep < totalSteps - 1) {
        currentStep++;
      } else {
        currentStep = 0;
      }
      updateStepsSlider();
    });

    stepsPrevBtn.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
      } else {
        currentStep = totalSteps - 1;
      }
      updateStepsSlider();
    });

    stepsDots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        currentStep = idx;
        updateStepsSlider();
      });
    });

    window.addEventListener("resize", updateStepsSlider);
  }
});
