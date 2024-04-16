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
