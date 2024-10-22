// Get elements by their IDs
const greetButton = document.getElementById('greetButton');
const nameInput = document.getElementById('name');
const greetingMessage = document.getElementById('greetingMessage');

// Add a click event listener to the button
greetButton.addEventListener('click', function() {
    const name = nameInput.value;

    // If name is entered, display greeting; otherwise, ask for the name
    if (name) {
        greetingMessage.textContent = `Hello, ${name}! Welcome to the webpage!`;
    } else {
        greetingMessage.textContent = 'Please enter your name.';
    }
});
