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
//project heading sectio
document.addEventListener("DOMContentLoaded", function () {
  const projectsSection = document.querySelector(".c-projects");

  function handleScroll() {
      const sectionPosition = projectsSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (sectionPosition < screenPosition) {
          projectsSection.classList.add("show");
      }
  }

  window.addEventListener("scroll", handleScroll);
});

//about section of civil
document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".c-about-container");

  function revealOnScroll() {
      const sectionTop = aboutSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
          aboutSection.classList.add("show");
      }
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

//project section
// const projects = [
//   {
//     title: "Skyline Apartments",
//     location: "Delhi • ₹2.5 Cr • Completed Jan 2024",
//     description: "High-rise residential project with 32 flats and underground parking. Delivered within 8 months.",
//     image: "images/project1.jpg"
//   },
//   {
//     title: "Green Villa",
//     location: "Jaipur • ₹1.8 Cr • Completed Aug 2023",
//     description: "Eco-friendly bungalow project with smart lighting and rainwater harvesting system.",
//     image: "images/project2.jpg"
//   },
//   {
//     title: "Central Plaza",
//     location: "Mumbai • ₹4 Cr • Completed Nov 2023",
//     description: "Commercial building project with 10 office floors, central AC, and basement parking.",
//     image: "images/project3.jpg"
//   }
// ];

// let currentIndex = 0;

// function showProject(index) {
//   const project = projects[index];
//   document.getElementById("project-title").innerText = project.title;
//   document.getElementById("project-location").innerText = project.location;
//   document.getElementById("project-description").innerText = project.description;
//   document.getElementById("project-image").src = project.image;
// }

// function nextProject() {
//   currentIndex = (currentIndex + 1) % projects.length;
//   showProject(currentIndex);
// }

// function prevProject() {
//   currentIndex = (currentIndex - 1 + projects.length) % projects.length;
//   showProject(currentIndex);
// }

// // Init
// showProject(currentIndex);

//owner Section
// When the section scrolls into view, add 'visible' class
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
});



