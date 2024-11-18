const gridContainer = document.querySelector(".grid-container");
const resetButton = document.querySelector(".reset");

function createGrid(size) {
    gridContainer.innerHTML = '';
    const squareSize = gridContainer.clientWidth / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.border = `1px solid lightgrey`;
        square.style.backgroundColor = 'white';
        square.style.opacity = '1';

        gridContainer.appendChild(square);
    }

    addHoverEffect();
}

function addHoverEffect() {
    const squares = document.querySelectorAll('.grid-container div');

    squares.forEach(square => {
        let hoverCount = 0;

        square.addEventListener('mouseover', () => {
            const randomColor = getRandomColor();
            square.style.backgroundColor = randomColor;

            hoverCount++;
            if (hoverCount <= 10) {
                square.style.opacity = `${hoverCount * 0.1}`;
            }
        });
    });
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

resetButton.addEventListener('click', () => {
    const size = prompt('Enter grid size (max 100):');

    if (size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert('Please enter a number between 1 and 100');
    }
});

createGrid(16);
