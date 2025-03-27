const palette = document.getElementById('palette');
const colorInput = document.getElementById('colorInput');

palette.addEventListener('click', function() {
    colorInput.click(); // Programmatically click the color input
});

colorInput.addEventListener('input', function() {
    const selectedColor = this.value;
    if (isHexColorTooDark(selectedColor)) {
        document.documentElement.style.setProperty('--text-img-color', 'hsl(0, 0.00%, 90%)');
    } else {
        document.documentElement.style.setProperty('--text-img-color', 'hsl(0, 0%, 0%)');
    }  
    document.documentElement.style.setProperty('--bg-color', selectedColor);
    console.log('Selected color:', this.value); // Log the selected color
});

function hexToRgb(hex) {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, '');

    // Parse the r, g, b values
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return [r, g, b];
}

function isHexColorTooDark(hex) {
    const [r, g, b] = hexToRgb(hex);
    const brightness = (0.299 * r) + (0.587 * g) + (0.114 * b);
    const threshold = 128; // You can adjust this value as needed

    return brightness < threshold;
}

// Example usage
// console.log(isHexColorTooDark('#333333')); // true
// console.log(isHexColorTooDark('#CCCCCC')); // false


