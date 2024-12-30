document.addEventListener('DOMContentLoaded', () => {
    let value = 0; // Initialize the value
    const incbutton = document.getElementById('incbutton');
    const decbutton = document.getElementById('decbutton');
    const disbutton = document.getElementById('disbutton');

    // Function to update the display button
    function updateDisplay() {
        disbutton.textContent = value;
    }

    // Add event listeners to the buttons
    incbutton.addEventListener('click', () => {
        value += 1; // Increment the value
        updateDisplay(); // Update the display
    });

    decbutton.addEventListener('click', () => {
        value -= 1; // Decrement the value
        updateDisplay(); // Update the display
    });
});
