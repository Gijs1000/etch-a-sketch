const grid = document.querySelector('main');
const array = [];

let gridWidth = 16;
let gridHeight = 16;

//Create the initial grid
drawGrid(gridWidth, gridHeight);
makeDrawable();

//Clicking reset button fires resets blocks and triggers createNewGrid function.
document.getElementById("resetButton").addEventListener("click", 
    function() {
        array.forEach((block) => block.classList.remove('hovered'));
        createNewGrid();
    });

function createNewGrid() {
    getDimensions();
    drawGrid(gridWidth, gridHeight);
    makeDrawable();
}

function getDimensions() { //for new grid
    let keepGoing = true;
    while (keepGoing) {
        gridWidth = parseInt(prompt('What should be the width of your new grid?'));
        if (Number.isInteger(gridWidth) && gridWidth > 0) {
            keepGoing = false;
        }
    }

    keepGoing = true;
    while (keepGoing) {
        gridHeight = parseInt(prompt('What should be the height of your new grid?'));
        if (Number.isInteger(gridWidth) && gridWidth > 0) {
            break;
        }
    }
}

function drawGrid(width, height) {
    grid.style.cssText = `grid-template-columns: repeat(${gridWidth}, 1fr); grid-template-rows: repeat(${gridHeight}, 1fr)`;
    let gridSize = width * height;
    for(let amountOfCells = 0; amountOfCells < gridSize; amountOfCells++) {
        let block = document.createElement('div');
        array.push(block);
        grid.appendChild(block);
    }
}

//For each block, checks if mouse has hovered over. If so, adds 'hovered' class to that block, turning it grey.
function makeDrawable() {
    array.forEach((block) => block.onmouseover = () => block.classList.add('hovered'));
}