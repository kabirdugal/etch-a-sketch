const gridContainer = document.querySelector('.grid-container');
const sizeButton = document.querySelector('.size-button');


// Function that creates the grid
function createGrid(size) {
    // sets grid to be size nxn
    gridContainer.style.gridTemplateColumns = 'auto '.repeat(size);
    // adds in grid boxes to grid
    for (i=0; i<size; i++) {
        for (j=0; j<size; j++) {
            let gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridContainer.appendChild(gridBox);
        }
    }
}

createGrid(20);