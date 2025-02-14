const slider = document.getElementById("slider");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let scrollAmount = 0;
const itemWidth = 255; // Width of one item (adjustable)
const visibleItems = 5; // Number of visible items

next.addEventListener("click", () => {
  if (scrollAmount < slider.scrollWidth - itemWidth * visibleItems) {
    scrollAmount += itemWidth * visibleItems;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  }
});

prev.addEventListener("click", () => {
  if (scrollAmount > 0) {
    scrollAmount -= itemWidth * visibleItems;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  }
});