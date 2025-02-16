document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('slider');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  
  if (!slider || !prev || !next) {
    console.error('Missing required elements!');
    return;
  }

  let scrollAmount = 0;
  let itemWidth, gap, visibleItems, scrollStep, maxScroll;

  function updateSliderValues() {
    // Reset slider position for accurate measurements
    slider.style.transform = 'translateX(0)';
    
    // Get dimensions from first item
    const firstItem = slider.children[0];
    if (!firstItem) {
      console.warn('No items in slider!');
      return;
    }
    
    itemWidth = firstItem.offsetWidth;
    const sliderStyle = getComputedStyle(slider);
    gap = parseInt(sliderStyle.gap) || 0;
    
    // Calculate visible items that can fully fit
    const availableWidth = slider.parentElement.offsetWidth;
    visibleItems = Math.floor((availableWidth + gap) / (itemWidth + gap));
    
    scrollStep = visibleItems * (itemWidth + gap);
    maxScroll = slider.scrollWidth - slider.parentElement.offsetWidth;
    
    // Re-apply current scroll position
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  }

  // Initial setup
  updateSliderValues();
  
  // Window resize handler with debounce
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updateSliderValues();
      scrollAmount = Math.min(scrollAmount, maxScroll);
      slider.style.transform = `translateX(-${scrollAmount}px)`;
    }, 100);
  });

  // Navigation handlers
  next.addEventListener('click', () => {
    updateSliderValues();
    const newScroll = scrollAmount + scrollStep;
    scrollAmount = Math.min(newScroll, maxScroll);
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  });

  prev.addEventListener('click', () => {
    updateSliderValues();
    const newScroll = scrollAmount - scrollStep;
    scrollAmount = Math.max(newScroll, 0);
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  });
});