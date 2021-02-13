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
    let newSize = prompt(
        'Please enter a number between 1 and 100.'
    )

    if (newSize !== null) {
        newSize = parseInt(newSize);
        if (newSize < 1 || newSize > 100 || Number.isNaN(newSize)) {
          alert("Invalid entry! Please enter a number between 1 and 100.");
          setGridSize();
        } else {
          clearGrid();
          createGrid(newSize);
        }
      }
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
    e.target.style.backgroundColor = random_rgba();
}

function random_rgba() {
    let o = Math.round
    r = Math.random
    s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


window.addEventListener('load', createGrid(25));
sizeButton.addEventListener('click', setGridSize);




