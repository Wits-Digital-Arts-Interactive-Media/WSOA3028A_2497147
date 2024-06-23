


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

menuItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.id = item.id;
    a.textContent = item.name;

    li.appendChild(a);
    navMenu.appendChild(li);
});

// Select all the buttons
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

// Display active page
const currentPage = window.location.pathname;

const buttonIds = ['profileButton', 'blogButton', 'essayButton', 'designButton', 'portfolioButton', 'indexButton'];

function highlightActiveButton() {
    buttonIds.forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.classList.remove('active');
            // Adjust the pageSegment to match the href attribute of the buttons
            const pageSegment = button.getAttribute('href').toLowerCase();
            // Check if currentPage ends with pageSegment to handle nested paths
            if (currentPage.endsWith(pageSegment) || (currentPage === '/' && buttonId === 'indexButton')) {
                button.classList.add('active');
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', highlightActiveButton);


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



//Image Zoom 

function createZoomOverlay(imageSrc) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.cursor = 'zoom-out';
  
    const zoomedImage = document.createElement('img');
    zoomedImage.src = imageSrc;
    zoomedImage.style.maxWidth = '80%';
    zoomedImage.style.maxHeight = '80%';
    overlay.appendChild(zoomedImage);
  
    overlay.addEventListener('click', function() {
      overlay.remove();
    });
  
    document.body.appendChild(overlay);
  }
  
  // Select all images within the .wireframe class
  const images = document.querySelectorAll('.wireframe img');
  
  // Add click event listener to each image
  images.forEach(image => {
    image.addEventListener('click', function() {
      createZoomOverlay(image.src);
    });
  });