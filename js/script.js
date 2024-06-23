
//Navbar navigation
const baseUrl = '/WSOA3028A_2497147';

const menuItems = [
    { name: 'Profile', href: `${baseUrl}/pages/profile/profile.html`, id: 'profileButton' },
    { name: 'Blogs', href: `${baseUrl}/pages/blogs/blog.html`, id: 'blogButton' },
    { name: 'Essay', href: `${baseUrl}/pages/essay/essay.html`, id: 'essayButton' },
    { name: 'Design', href: `${baseUrl}/pages/design/design.html`, id: 'designButton' },
    { name: 'Portfolio', href: `${baseUrl}/pages/portfolio/portfolio.html`, id: 'portfolioButton' },
    { name: 'Home', href: `${baseUrl}/index.html`, id: 'indexButton' },
];

const navMenu = document.getElementById('nav-menu'); 
//
menuItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.id = item.id;
    a.textContent = item.name;

    li.appendChild(a);
    navMenu.appendChild(li);
});




//Card Buttons Navigation
const cardButtons = document.querySelectorAll('.card-button');

// Add a 'click' event listener to each button
cardButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    // Get the value of the 'data-page' attribute
    const page = event.target.getAttribute('data-page');
    
    // Navigate to the page
    window.location.href = page;
  });
});



//smooth scroll for navigation blogs 
document.addEventListener('DOMContentLoaded', function() {
 
    const navButtons = document.querySelectorAll('.toc a');

    
    navButtons.forEach(navButton => {
        navButton.addEventListener('click', function(event) {
            
            event.preventDefault();

            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

           
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

//NavBar adjustments
document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.querySelector('.navbar-toggle');
    toggle.addEventListener('click', function() {
        this.classList.toggle('open');
        
        var menu = this.nextElementSibling;
        if (menu.style.display === "flex") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }
    });
});

// Initial state
var lastScrollTop = 0; // Tracks the last scroll position
var navbar = document.querySelector('nav'); // Select the navbar

window.addEventListener('scroll', function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Scroll Down
        navbar.style.top = '-60px'; // Hide navbar on scroll down
    } else {
        // Scroll Up
        navbar.style.top = '0'; // Show navbar on scroll up
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Reset to 0 on reaching top
}, false);

//Display active page

const currentPage = window.location.pathname;

const buttonIds = ['profileButton', 'blogButton', 'essayButton', 'designButton', 'portfolioButton', 'indexButton'];

function highlightActiveButton() {
    buttonIds.forEach(buttonId => {
        const button = document.getElementById(buttonId);

       
        if (button) {
            button.classList.remove('active');
            
         
            const pageSegment = buttonId.toLowerCase().replace('button', '');
            
           
            if (currentPage.includes(pageSegment) || (currentPage === '/' && buttonId === 'indexButton')) {
                button.classList.add('active');
            }
        }
    });
}

highlightActiveButton();

document.addEventListener('DOMContentLoaded', function () {
    // Get all buttons in the navigation bar
    const navButtons = document.querySelectorAll('nav ul li button');

    // Remove 'active' class from all buttons
    navButtons.forEach(button => button.classList.remove('active'));

    // Add 'active' class to the home button
    document.querySelector('#indexButton').classList.add('active');
});

//scrolltop button 
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.createElement('div');
    scrollToTopBtn.className = 'scrollTop';
    scrollToTopBtn.textContent = 'Top';
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
});



//Image Zoom Function
  document.addEventListener('DOMContentLoaded', function() {
    
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
  
    function toggleZoom(event) {
      const img = event.target;
      img.classList.toggle('zoomed');
      overlay.style.display = img.classList.contains('zoomed') ? 'block' : 'none';
    }
  
  
    document.querySelectorAll('img.Image, .wireframe img').forEach(img => {
      img.addEventListener('click', toggleZoom);
    });
  
   
    overlay.addEventListener('click', function() {
      document.querySelectorAll('.zoomed').forEach(img => {
        img.classList.remove('zoomed');
      });
      this.style.display = 'none';
    });
  });
  

  //Portfolio Images
  function openModal(element) {
    var img = element.getElementsByTagName('img')[0];
    var description = element.getElementsByTagName('figcaption')[0].innerText;
    document.getElementById('modalImage').src = img.src;
    document.getElementById('imageDescription').innerText = description;
    document.getElementById('imageModal').style.display = "block";
  }
  
  function closeModal() {
    document.getElementById('imageModal').style.display = "none";
  }

  //backgroundvideo
  document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('backgroundVideo');
    // Define both video sources
    var sources = ["images/porsche-992-turbo-s-techart-moewalls-com.mp4", "images/solid-snake-metal-gear-solid-moewalls-com.mp4"];
    var currentVideo = 0; 

    // Function to check if the video is in view and play or pause accordingly
    var checkVideoInView = function() {
        var rect = video.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            if (video.paused) {
                video.play();
            }
        } else {
            video.pause();
        }
    };

    // Switch to the next video when the current video ends
    video.addEventListener('ended', function() {
        currentVideo = (currentVideo + 1) % sources.length; 
        video.src = sources[currentVideo];
        video.load(); 
        checkVideoInView(); 
    }, false);

 
    window.addEventListener('scroll', checkVideoInView);
    window.addEventListener('resize', checkVideoInView);


    checkVideoInView(); 
});