const gridContainer = document.querySelector(".grid-container");
const sizeButton = document.querySelector(".size-button");
const optionsButtons = document.querySelectorAll(".options-button");

let color;

// Clears contents of grid
function clearGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

// Resizes the grid via a prompt
function setGridSize() {
  let newSize = prompt("Please enter a number between 1 and 100.");

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
  gridContainer.style.gridTemplateColumns = "auto ".repeat(size);
  gridContainer.style.gridTemplateRows = "auto ".repeat(size);
  color = 'black';
  // adds in grid boxes to grid
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      let gridBox = document.createElement("div");
      gridBox.classList.add("grid-box");
      gridBox.addEventListener("mouseover", colorGrid);
      gridContainer.appendChild(gridBox);
    }
  }
}

// Colors in the square if hovered over
function colorGrid(e) {
    console.log(color);
  if (color == 'black') {
    e.target.style.backgroundColor = color;
  } else if (color == 'white') {
    e.target.style.backgroundColor = color;
  } else {
    e.target.style.backgroundColor = random_rgba();
  }
    
}

// Generates random RGBA color value
function random_rgba() {
  let o = Math.round;
  r = Math.random;
  s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}

// Changes color of drawing
function colorChooser(e) {
  if (e.target.id === "black") {
    color = "black";
  } else if (e.target.id === "white") {
    color = "white";
  } else {
    color = 'colorful';
  }
}

window.addEventListener("load", createGrid(25)); // initializes grid
sizeButton.addEventListener("click", setGridSize); // resizes grid
optionsButtons.forEach((btn) => btn.addEventListener("click", colorChooser));
