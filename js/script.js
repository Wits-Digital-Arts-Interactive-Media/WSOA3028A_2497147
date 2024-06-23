
//Navbar navigation
const baseUrl = '/WSOA3028A_2497147';

const menuItems = [
    { name: 'Profile', href: 'pages/profile/profile.html', id: 'profileButton' },
    { name: 'Blogs', href: 'pages/blogs/blog.html', id: 'blogButton' },
    { name: 'Essay', href: 'pages/essay/essay.html', id: 'essayButton' },
    { name: 'Design', href: 'pages/design/design.html', id: 'designButton' },
    { name: 'Portfolio', href: 'pages/portfolio/portfolio.html', id: 'portfolioButton' },
    { name: 'Home', href: 'index.html', id: 'indexButton' },
];

const navMenu = document.getElementById('nav-menu'); // Ensure this ID matches the ID of your navigation menu container in HTML
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


document.querySelector('h1').addEventListener('click', function() {
    let essayContent = 'This is the content of Essay2. It is loaded dynamically when the user clicks on the heading.';
    document.querySelector('.essay2').textContent = essayContent;
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

  