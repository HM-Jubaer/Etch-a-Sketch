const gridContainer = document.querySelector(".grid-container");
const resetButton = document.querySelector(".reset");

function createGrid(size) {

    gridContainer.innerHTML = '';

    const squareSize = gridContainer.clientWidth / size;

    for (i = 0; i < size * size; i++) {
        const square = document.createElement('div');

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.border = `1px solid Lightgrey`;

        gridContainer.appendChild(square);
    }

    addHoverEffect();
}

function addHoverEffect() {

    const squares = document.querySelectorAll('.grid-container div');

    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
    });
}

resetButton.addEventListener('click', () => {
    const size = prompt('Enter grid size (max 100):');

    if( size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert('Please enter a number between 1 and 100');
    }
})

createGrid(16);