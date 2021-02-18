
    //when mouse over a div (with a certain class)
        //find out which div this is
        //enable a class that colors this div (and keeps it colored)


const GRIDSIZE = 16 * 16;
const grid = document.querySelector('main');
const array = [];

//Create 16 * 16 blocks in the grid
for(let amountOfCells = 0; amountOfCells < GRIDSIZE; amountOfCells++) {
    let block = document.createElement('div');
    array.push(block);
    grid.appendChild(block);
}

//For each block, checks if mouse has hovered over. If so, adds 'hovered' class to that block, turning it grey.
array.forEach((block) => block.onmouseover = () => block.classList.add('hovered')); 