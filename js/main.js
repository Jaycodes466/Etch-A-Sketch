const gridContainer = document.querySelector('.grid-container');
const drawBtn = document.querySelector('.draw-btn');
const colorPickerInput = document.querySelector('.user-picks-color');
const eraserBtn = document.querySelector('.eraser-btn');
const resetBtn = document.querySelector('.reset-btn');

// Creating dynamically sized grid from user input
function loadGrid() {
  let gridSize = prompt(
    'Please enter a number between 1-100 to create an Etch-A-Sketch grid.'
  );
  if (gridSize <= 100) {
    let totalGridSize = gridSize * gridSize;
    const grid = document.createElement('div');
    grid.classList.add('grid');
    gridContainer.appendChild(grid);
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (i = 0; i < totalGridSize; i++) {
      let square = document.createElement('div');
      square.classList.add('square');
      grid.appendChild(square);
    }
    hoverEffect();
  } else {
    // Reloading prompt if user enters a number over 100
    alert('Error, number cannot be greater than 100!');
    {
      window.location.reload();
    }
  }
}

loadGrid();

// Etch-A-Sketch Hover Effect
function hoverEffect() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(function (square) {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = '#000';
    });
  });
}
