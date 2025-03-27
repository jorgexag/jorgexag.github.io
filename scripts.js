const palette = document.getElementById('palette');

palette.addEventListener('click', function() {
    const randomHSL = generateRandomHSL(); // Programmatically click the color input
    document.documentElement.style.setProperty('--bg-color',  randomHSL);
    if (isHSLColorTooDark(randomHSL)) {
        document.documentElement.style.setProperty('--text-img-color', 'hsl(0, 0.00%, 90%)');
    } else {
        document.documentElement.style.setProperty('--text-img-color', 'hsl(0, 0%, 0%)');
    }
    console.log('Selected color:', randomHSL); // Log the selected color
});

function generateRandomHSL() {
    const h = Math.floor(Math.random() * 360); // Hue: 0-360
    const s = Math.floor(Math.random() * 100); // Saturation: 0-100%
    const l = Math.floor(Math.random() * 100); // Lightness: 0-100%
    return `hsl(${h}, ${s}%, ${l}%)`;
}


function isHSLColorTooDark(hsl) {
    // Extract lightness from the HSL string
    const lightness = parseInt(hsl.match(/(\d+)%\)$/)[1]);
    return lightness < 50; // Consider colors with lightness < 50% as dark
}

