const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon")

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  });

  function toggleMenu() {
    mobileMenu.classList.toggle('translate-y-0');
    mobileMenu.classList.toggle('-translate-y-full');

    if(mobileMenu.classList.contains('translate-y-0')) {
      hamburgerIcon.textContent = 'X';
    } else {
      hamburgerIcon.textContent = '☰'
    }
  }

  menuBtn.addEventListener('click', toggleMenu)

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('slider');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const submitButton = document.getElementById('submit');

  const carouselItems = [
    { src: 'html.png', label: 'HTML' },
    { src: 'cssLogo.png', label: 'CSS' },
    { src: 'javascriptLogo.png', label: 'JavaScript' },
    { src: 'tailwindcssLogo.png', label: 'Tailwind' },
    { src: 'reactLogo.png', label: 'React' },
    { src: 'mysqlLogo.png', label: 'MySQL' },
    { src: 'pythonLogo.png', label: 'Python' },
    { src: 'gitLogo.png', label: 'Git' },
    { src: 'CLogo.png', label: 'C' },
    { src: 'C++Logo.png', label: 'C++' },
    { src: 'javaLogo.png', label: 'Java' }
  ];

  carouselItems.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('carousel-item', 'mt-3');
    div.innerHTML = `
      <div class="group relative bg-[#1e1e1e] h-30 w-30 sm:h-48 sm:w-48 md:h-52 md:w-52 lg:h-70 lg:w-70 rounded-full flex justify-center items-center hover:cursor-default hover:scale-105 duration-300 box-border logo-item">
        <img src="${item.src}" alt="${item.label}" class="duration-300 size-16 sm:size-24 md:size-32 lg:size-40 group-hover:blur-lg">
        <span class="absolute text-lg sm:text-xl font-bold text-[#fafdf1] opacity-0 duration-500 group-hover:opacity-100">${item.label}</span>
      </div>
    `;
    slider.appendChild(div);
  });

  let currentIndex = 0;
  let scrollStep = calculateScrollStep();
  let activeLogo = null; // Track the active logo

  function updateCarousel() {
    const itemWidth = calculateItemWidth();
    slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  function calculateScrollStep() {
    const width = window.innerWidth;
    if (width >= 1024) return 4;
    if (width >= 786) return 3;
    return 2;
  }

  function calculateItemWidth() {
    return document.querySelector('.carousel-item').offsetWidth + 16;
  }

  nextButton.addEventListener('click', function () {
    const items = document.querySelectorAll('.carousel-item');
    if (currentIndex + scrollStep < items.length) {
      currentIndex += scrollStep;
    } else {
      currentIndex = items.length - 1;
    }
    updateCarousel();
  });

  prevButton.addEventListener('click', function () {
    if (currentIndex - scrollStep >= 0) {
      currentIndex -= scrollStep;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  nextButton.addEventListener("click", function () {
    resetButtons();
    this.style.backgroundColor = "#1e1e1e";
    this.style.color = "#e5e7df";
    this.style.transform = "scale(0.9)"

    setTimeout(() => {
      this.style.backgroundColor = "";
      this.style.color = "";
      this.style.transform = ""
    }, 200);
  });

  prevButton.addEventListener("click", function () {
    resetButtons();
    this.style.backgroundColor = "#1e1e1e";
    this.style.color = "#e5e7df";
    this.style.transform = "scale(0.9)"

    setTimeout(() => {
      this.style.backgroundColor = "";
      this.style.color = "";
      this.style.transform = ""
    }, 200);
  });

  submitButton.addEventListener("click", function () {
    resetButtons();
    this.style.backgroundColor = "#1e1e1e";
    this.style.color = "#e5e7df";
    this.style.transform = "scale(0.9)"

    setTimeout(() => {
      this.style.backgroundColor = "";
      this.style.color = "";
      this.style.transform = ""
    }, 200);
  });


  function resetButtons() {
    prevButton.style.backgroundColor = "";
    prevButton.style.color = "";
    nextButton.style.backgroundColor = "";
    nextButton.style.color = "";
    submitButton.style.backgroundColor = "";
    submitButton.style.color = "";

  }


  window.addEventListener('resize', function () {
    scrollStep = calculateScrollStep();
  });

  updateCarousel();


  document.querySelectorAll('.logo-item').forEach(item => {
    item.addEventListener('click', function () {
      if (window.innerWidth <= 786) {
        // Remove blur from the previously active logo
        if (activeLogo && activeLogo !== this) {
          const prevImg = activeLogo.querySelector('img');
          const prevLabel = activeLogo.querySelector('span');
          prevImg.classList.remove('blur-lg');
          prevLabel.classList.remove('opacity-100');
          prevLabel.classList.add('opacity-0');
        }

        // Toggle blur and show label for clicked logo
        const img = this.querySelector('img');
        const label = this.querySelector('span');

        if (img.classList.contains('blur-lg')) {
          img.classList.remove('blur-lg');
          label.classList.remove('opacity-100');
          label.classList.add('opacity-0');
          activeLogo = null; // Reset active logo
        } else {
          img.classList.add('blur-lg');
          label.classList.add('opacity-100');
          label.classList.remove('opacity-0');
          activeLogo = this; // Set the clicked logo as active
        }
      }
    });
  });

});

