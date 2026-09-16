
let cote = 16;

const container = document.querySelector(".container");
const black = document.querySelector(".black");
const colorful = document.querySelector(".colorful");
const reset = document.querySelector(".reset");
const resize = document.querySelector(".resize");

function makeTheGrid(cote) {
    container.innerHTML = "";

    container.style.gridTemplateColumns = `repeat(${cote}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${cote}, 1fr)`;

    for (let i = 0; i < cote * cote; i++) {
        let square = document.createElement("div");
        square.classList.add("box");

        container.appendChild(square);

        square.addEventListener("mouseover", hover);

    }
}
makeTheGrid(cote);

function hover() {
    this.style.backgroundColor = "black";
}


function resizeTheGrid() {
    cote = prompt("choose your new size =>2 <=100");
    if (cote < 2 || cote > 100) {
        return;
    }
    makeTheGrid(cote);
}

resize.addEventListener("click", resizeTheGrid);

function resetTheGrid() {
    const squares = document.querySelectorAll(".box");
    squares.forEach(square => {
        square.style.backgroundColor = "gainsboro";
    });
}
reset.addEventListener("click", resetTheGrid);

function colorfulGrid() {
    function randomizeColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    let squares = document.querySelectorAll(".box");
    squares.forEach(square => {
        square.addEventListener("mouseover", randomizeColor);
    });
}
colorful.addEventListener("click", colorfulGrid);

function clickBlack() {
    function hoverblack() {
        this.style.backgroundColor = "black";
    }
    let squares = document.querySelectorAll(".box");
    squares.forEach(square => {
        square.addEventListener("mouseover", hoverblack);
    });
}
black.addEventListener("click", clickBlack);