//Navbar navigation
const menuItems = [
    { name: 'Profile', href: '/pages/profile/profile.html', id: 'profileButton' },
    { name: 'Blogs', href: '/pages/blogs/blog.html', id: 'blogButton' },
    { name: 'Essay', href: '/pages/essay/essay.html', id: 'essayButton' },
    { name: 'Design', href: '/pages/design/design.html', id: 'designButton' },
    { name: 'Portfolio', href: '/pages/portfolio/portfolio.html', id: 'portfolioButton' },
    { name: 'Home', href: '/index.html', id: 'indexButton' },
  ];
  
  
  const navMenu = document.getElementById('nav-menu'); // Replace 'nav-menu' with the actual id of your parent element
  

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


//image track
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let isDown = false;
    let startX;
    let scrollLeft;
    let intervalId;

    function autoPlay() {
        intervalId = setInterval(() => {
            slider.scrollLeft += slider.offsetWidth; // Scroll to the next image
            if (slider.scrollLeft >= (slider.scrollWidth - slider.offsetWidth)) {
                // If at the end, scroll back to the beginning
                slider.scrollLeft = 0;
            }
        }, 5000); 
    }

    autoPlay(); // Start auto-play when the page loads

    // Pause auto-play when the slider is hovered over
    slider.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });

    // Resume auto-play when the slider is not being hovered over
    slider.addEventListener('mouseleave', () => {
        autoPlay();
    });

    // Enable dragging
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });
});

document.querySelector('h1').addEventListener('click', function() {
    let essayContent = 'This is the content of Essay2. It is loaded dynamically when the user clicks on the heading.';
    document.querySelector('.essay2').textContent = essayContent;
  });