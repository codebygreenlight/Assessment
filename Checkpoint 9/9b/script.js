// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // Function to generate random color
    function getRandomColor() {
        // Generate random values for red, green, and blue
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        
        // Return color in hex format
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }

    // Add click event listener to button
    changeColorBtn.addEventListener('click', function() {
        const newColor = getRandomColor();
        colorBox.style.backgroundColor = newColor;
        
        // Optional: Display the color code
        colorBox.textContent = newColor;
        colorBox.style.color = 'white';
        colorBox.style.display = 'flex';
        colorBox.style.justifyContent = 'center';
        colorBox.style.alignItems = 'center';
    });
}); 