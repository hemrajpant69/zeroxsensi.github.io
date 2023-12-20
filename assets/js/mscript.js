const sendButton = document.getElementById('sendButton');
const userMessage = document.getElementById('userMessage');

sendButton.addEventListener('click', function() {
    const message = userMessage.value;
    const phoneNumber ="9806400774";
    
    if (message.trim() !== '') { // Check if message isn't empty
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`);
    } else {
        alert('Please enter a message.');
    }
});

document.getElementById('homeButton').addEventListener('click', function() {
    window.location.href = "index.html";  // Navigate to home (adjust link if needed)
});

document.getElementById('backButton').addEventListener('click', function() {
    window.history.back();  // Go back in the browser's history
});
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});
