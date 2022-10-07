const container = document.getElementById('box-container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

function generateBoxes(total) {
    for (let index = 0; index < total; index++) {
        const box = document.createElement('div');
        box.classList.add('box');

        box.addEventListener('mouseover', () => setColor(box));
        box.addEventListener('mouseout', () => removeColor(box));

        container.appendChild(box);
    };
}

function setColor(box) {
    const color = getRandomColor();
    box.style.backgroundColor = color;
}

function removeColor(box) {
    box.style.backgroundColor = '#222';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

generateBoxes(500);