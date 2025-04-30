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


//PROJECT SECTION
document.addEventListener('DOMContentLoaded', function () {
  // Array of projects (add your actual project details here)
  const projects = [
      {
          title: "Skyline Apartments",
          location: "Delhi • ₹2.5 Cr • Completed Jan 2024",
          description: "High-rise residential project with 32 flats and underground parking. Delivered within 8 months.",
          image: "civil1.jpg"
      },
      {
          title: "Green Park Towers",
          location: "Mumbai • ₹3.2 Cr • Completed Dec 2023",
          description: "Sustainable high-rise tower with eco-friendly amenities, green roofs, and solar panels.",
          image: "civil2.jpg"
      },
      {
          title: "Riverfront Mall",
          location: "Kolkata • ₹5 Cr • Completed Nov 2022",
          description: "A state-of-the-art commercial complex with high-end retail outlets and parking.",
          image: "civil3.jpg"
      }
      // Add more projects as needed
  ];

  let currentProjectIndex = 0;

  // Function to update the project display
  function updateProject() {
      const project = projects[currentProjectIndex];

      // Update project title
      document.querySelector('.c-slider-text h3').textContent = project.title;
      // Update project location
      document.querySelector('#project-location').textContent = project.location;
      // Update project description
      document.querySelector('#project-description').textContent = project.description;
      // Update project image
      document.querySelector('#project-image').src = project.image;
  }

  // Function to go to the previous project
  function prevProject() {
      currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
      updateProject();
  }

  // Function to go to the next project
  function nextProject() {
      currentProjectIndex = (currentProjectIndex + 1) % projects.length;
      updateProject();
  }

  // Event listeners for buttons
  document.querySelector('.c-previous-btn').addEventListener('click', prevProject);
  document.querySelector('.c-next-btn').addEventListener('click', nextProject);

  // Initialize the first project
  updateProject();
});


//TOWERLINE

document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.3 });

  const animatedElements = document.querySelectorAll('.t-about-container');
  animatedElements.forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', function () {
  // Towerline-specific projects
  const tProjects = [
      {
          title: "Skyline Apartments",
          location: "Delhi • ₹2.5 Cr • Completed Jan 2024",
          description: "High-rise residential project with 32 flats and underground parking. Delivered within 8 months.",
          image: "T7.jpg"
      },
      {
          title: "Green Park Towers",
          location: "Mumbai • ₹3.2 Cr • Completed Dec 2023",
          description: "Sustainable high-rise tower with eco-friendly amenities, green roofs, and solar panels.",
          image: "T1.jpg"
      },
      {
          title: "Riverfront Mall",
          location: "Kolkata • ₹5 Cr • Completed Nov 2022",
          description: "A state-of-the-art commercial complex with high-end retail outlets and parking.",
          image: "T2.jpg"
      }
      // Add more Towerline projects here if needed
  ];

  let tCurrentProjectIndex = 0;

  function updateTProject() {
      const project = tProjects[tCurrentProjectIndex];

      // Update Towerline project details
      document.querySelector('.t-slider-text h3').textContent = project.title;
      document.querySelector('#project-location').textContent = project.location;
      document.querySelector('#project-description').textContent = project.description;
      document.querySelector('#project-image').src = project.image;
  }

  function prevTProject() {
      tCurrentProjectIndex = (tCurrentProjectIndex - 1 + tProjects.length) % tProjects.length;
      updateTProject();
  }

  function nextTProject() {
      tCurrentProjectIndex = (tCurrentProjectIndex + 1) % tProjects.length;
      updateTProject();
  }

  // Event listeners
  document.querySelector('.t-previous-btn').addEventListener('click', prevTProject);
  document.querySelector('.t-next-btn').addEventListener('click', nextTProject);

  // Initialize the Towerline slider
  updateTProject();
});

//HYDRO POWERPLANT
// h-hydropowerplant.js


  const pText = `The hydropower plant project in Champawat, Uttarakhand, addresses a long-standing issue of frequent power outages in the region. For the past two decades, multiple attempts were made to establish a reliable hydropower system here, but all efforts either stalled or failed due to technical and structural challenges.

However, a major breakthrough came when Hari Om Construction Company took charge of the project. With consistent effort, advanced planning, and the dedication of over six years, the company successfully built and commissioned the plant — finally bringing a stable, renewable source of electricity to Champawat. This plant now stands as a symbol of persistence, sustainable engineering, and regional empowerment.`;

  let index = 0;
  const element = document.getElementById("p-type-text");

  function typeLine() {
    if (index < pText.length) {
      element.textContent += pText.charAt(index);
      index++;
      setTimeout(typeLine, 20);
    }
  }

  window.addEventListener("DOMContentLoaded", () => {
    element.textContent = "";
    typeLine();
  });

  //history of PP
  // JavaScript to add smooth scroll effect (if needed for page scroll effects)

  const boxes = document.querySelectorAll('.p-box');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.5 });

  boxes.forEach(box => {
    observer.observe(box);
  });


  const cards = document.querySelectorAll('.p-card');

  function revealCardsOnScroll() {
    const triggerBottom = window.innerHeight * 0.9;

    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', revealCardsOnScroll);
  window.addEventListener('load', revealCardsOnScroll);

  //gallary section
 // JS for Gallery Modal
const openBtn = document.querySelector('.p-see-more-btn');
const modal = document.getElementById('p-gallery-modal');
const closeBtn = document.getElementById('p-close-gallery');

openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});











