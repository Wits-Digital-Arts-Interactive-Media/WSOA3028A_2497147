document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons inside the navigation
    const buttons = document.querySelectorAll('nav button');

    // Add event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.id.replace('Button', ''); 
            const targetPage = (targetId === 'index') ? 'index.html' : `${targetId}.html`; 
            
            goToPage(targetPage); 
        });
    });
});

// Function to navigate to a page
function goToPage(page) {
    window.location.href = page;
}



//smooth scroll for navigation blogs 
document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation buttons
    const navButtons = document.querySelectorAll('.toc a');

    // Add event listener to each navigation button
    navButtons.forEach(navButton => {
        navButton.addEventListener('click', function(event) {
            // Prevent the default behavior of navigating to a new page
            event.preventDefault();

            // Get the target section's ID from the button's href attribute
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll to the target section smoothly
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
});
