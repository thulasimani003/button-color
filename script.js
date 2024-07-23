let colors = ['red', 'green', 'blue'];
let currentColorIndex = 0;

function changeColor() {
    let colorBox = document.getElementById('color-box');
    let colorText = document.getElementById('color-text');
    let newColor = colors[currentColorIndex];
    
    colorBox.style.backgroundColor = newColor;
    colorText.innerText = `Background Color: ${newColor}`;
    
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}
