const gridContainer = document.querySelector('.grid-container');
const sizeButton = document.querySelector('.size-button');

//createGrid(8);
// Clears contents of grid
function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

// Resizes the grid via a prompt
function setGridSize() {
    let size = prompt(
        'Please enter a number between 1 and 100.'
    )

    clearGrid();
    createGrid(size);
} 

// Creates the grid
function createGrid(size) {
    // sets grid to be size nxn
    gridContainer.style.gridTemplateColumns = 'auto '.repeat(size);
    gridContainer.style.gridTemplateRows = 'auto '.repeat(size);
    // adds in grid boxes to grid
    for (i=0; i<size; i++) {
        for (j=0; j<size; j++) {
            let gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.addEventListener('mouseover', colorGrid);
            gridContainer.appendChild(gridBox);
        }
    }
}

// Colors in the square if hovered over
function colorGrid(e) {
    e.target.style.backgroundColor = 'black';
}

window.addEventListener('load', createGrid(25));
sizeButton.addEventListener('click', setGridSize);




