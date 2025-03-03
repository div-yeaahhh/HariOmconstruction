// Image Carousel Logic
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const carouselContainer = document.querySelector('.carousel-images');
const totalImages = images.length;

function changeImage() {
  // Hide all images by setting opacity to 0
  images.forEach(image => {
    image.style.opacity = 0;
  });

  // Update carousel position to show the next image
  carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Show the current image with a fade-in effect
  images[currentIndex].style.opacity = 1;

  // Update the index for the next image
  currentIndex = (currentIndex + 1) % totalImages;
}

// Change image every 4 seconds
setInterval(changeImage, 400);

// To show the content and animate the text/image when the page is scrolled
window.addEventListener('scroll', function() {
  const text = document.querySelector('.about-text');
  const textPosition = text.getBoundingClientRect().top;

  if (textPosition < window.innerHeight) {
    text.classList.add('animate-slide-in');
  }
});

// Toggle the "More" content
function toggleContent() {
  const moreContent = document.querySelector('.more-content');
  const moreButton = document.querySelector('.more-btn');
  
  if (moreContent.style.display === 'none' || moreContent.style.display === '') {
    moreContent.style.display = 'block';
    moreButton.textContent = 'Less';
  } else {
    moreContent.style.display = 'none';
    moreButton.textContent = 'More';
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll(".owner-heading, .owner-description, .owner-quote");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top + scrollTop;
      if (elementTop - windowHeight < scrollTop) {
        element.classList.add("reveal");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Check initially in case the user starts from a scrolled position
});

//civil page
