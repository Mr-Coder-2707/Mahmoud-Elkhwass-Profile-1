document.addEventListener("DOMContentLoaded", function () {
  let menuToggle = document.querySelector(".menu-toggle");
  let navLinks = document.querySelector(".nav-links");
  let navbar = document.getElementById("navbar");
  let logo = document.querySelector(".logo");


  menuToggle.addEventListener("click", function (event) {
      navLinks.classList.toggle("active");
      event.stopPropagation(); 
  });


  document.addEventListener("click", function (event) {
      if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
          navLinks.classList.remove("active");
      }
  });


  navLinks.addEventListener("click", function (event) {
      event.stopPropagation();
  });


  window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
          navbar.classList.add("scrolled"); 
      } else {
          navbar.classList.remove("scrolled");
      }
  });


  logo.addEventListener("click", function () {
      location.reload();
  });


  if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
});






document.addEventListener("DOMContentLoaded", function() {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#f1c40f" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { 
        enable: true, 
        distance: 150, 
        color: "#f1c40f", 
        opacity: 0.4, 
        width: 1 
      },
      move: { 
        enable: true, 
        speed: 2, 
        direction: "none", 
        random: true, 
        straight: false, 
        out_mode: "out" 
      }
    },
    interactivity: {
      detect_on: "window", 
      events: {
        onhover: { 
          enable: true, 
          mode: "grab" 
        },
        onclick: { 
          enable: true, 
          mode: "push" 
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });
});


// Loading screen functionality
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    var loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      setTimeout(function() {
        loadingScreen.style.display = 'none';
      }, 200); // This matches the transition time
    }
  }, 2000); // 5000 milliseconds = 5 seconds
});

// Function to show loading modal
function showLoadingModal() {
  const modal = document.createElement('div');
  modal.className = 'loading-modal';
  modal.innerHTML = `
    <div class="wheel-and-hamster" aria-label="Orange and tan hamster running in a metal wheel" role="img">
      <div class="wheel"></div>
      <div class="hamster">
        <div class="hamster__body">
          <div class="hamster__head">
            <div class="hamster__ear"></div>
            <div class="hamster__eye"></div>
            <div class="hamster__nose"></div>
          </div>
          <div class="hamster__limb hamster__limb--fr"></div>
          <div class="hamster__limb hamster__limb--fl"></div>
          <div class="hamster__limb hamster__limb--br"></div>
          <div class="hamster__limb hamster__limb--bl"></div>
          <div class="hamster__tail"></div>
        </div>
      </div>
      <div class="spoke"></div>
    </div>
    <p>Loading...</p>
  `;
  document.body.appendChild(modal);
  
  // Remove modal after 5 seconds
  setTimeout(() => {
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.remove();
    }, 200);
  }, 2000);
}

// Add event listeners to all "More details" buttons
document.querySelectorAll('.more-details').forEach(button => {
  button.addEventListener('click', function(e) {
    // Only show modal if it's an external link
    if (!this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetUrl = this.getAttribute('href');
      showLoadingModal();
      
      // Navigate after 5 seconds
      setTimeout(() => {
        window.open(targetUrl, '_blank');
      }, 2000);
    }
  });
});