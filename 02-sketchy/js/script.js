//variables
let gridSize = 16;

//elements
const container = document.querySelector("#container");
const btn = document.querySelector("#clear");

createGrid();

btn.addEventListener('click', resetGrid);


function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        let newSpan = document.createElement("span");
        container.appendChild(newSpan);
        for (let i = 0; i < gridSize; i++) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("grid");
            newSpan.appendChild(newDiv); 
        }
    }
    addHoverEvents();
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function resetGrid() {
    gridSize = prompt("How many squares per row?");
    removeGrid();
    createGrid();
}

function addHoverEvents() {
    let grid = document.querySelectorAll(".grid");
    grid.forEach(square => {
        square.addEventListener('mouseover', function(){
            square.classList.add("colored");
        });
    });
}