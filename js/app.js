const slider = document.getElementById("cardsSlider");
const cards = document.querySelectorAll(".description-cards");

let currentSlide = 0;

function updateSlider() {
  const cardWidth = cards[0].offsetWidth + 20;
  slider.style.transform = `translateX(-${currentSlide * cardWidth}px)`;

  cards.forEach((card, index) => {
    card.classList.remove("active", "side");

    if (index === currentSlide) {
      card.classList.add("active");
    } else {
      card.classList.add("side");
    }
  });
}

function sliderScrollRight() {
  if (currentSlide < cards.length - 1) {
    currentSlide++;
    updateSlider();
  }
}

function sliderScrollLeft() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
}


updateSlider();