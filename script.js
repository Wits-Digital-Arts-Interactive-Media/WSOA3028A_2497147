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

//Function to track slide movement on portfolio
const track = document.getElementById("image-track");


window.onmousedown = e => {
    track.dataset.e.clientX;
}

window.onmousemove = e =>{

if(track.dataset.mouseDownAt ==="0")return;

const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innderWidth/ 2;

const percentage = (mouseDelta /maxDelta)* 100;
        nextPercentage = parseFloat(track.dataset.prevPercentage)+ percentage;
track.dataset.prevPercentage = nextPercentage;

track.style.transform = `translate(${percentage}%, -50)`;
}

window.onmouseup = () =>{

    track.daataset.mouseDownAt ="0"; 
    
}

//Slider incomplete because styling is incomplete