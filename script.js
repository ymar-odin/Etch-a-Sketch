const bodyEl = document.querySelector("body");
const buttonSectionDiv = document.createElement("div");
buttonSectionDiv.className = "buttonCont";
bodyEl.appendChild(buttonSectionDiv);

const buttonEl = document.createElement("button");
buttonEl.className = "resetbutton";
buttonSectionDiv.appendChild(buttonEl);
const resetButtonEl = document.querySelector(".resetbutton");
resetButtonEl.textContent = "Reset";


const boxNodeCr = document.createElement("div");
boxNodeCr.className = "boxdiv";
bodyEl.appendChild(boxNodeCr);

const boxEl = document.querySelector(".boxdiv");
const boxListEl = document.querySelectorAll(".boxdiv");
let columnBoxNodeCr;
let smallBoxNodeCr;
let userInput = 16;
// Function that contains a loop that creates a grid based on userInput,
// initial value is 16x16
// smallboxdivs receive width and height values based on a formula at time of 
// creation to fit in parent container

function createGrid() {
    for(let i = 0; i < userInput; i++) {
        columnBoxNodeCr = document.createElement("div");
        columnBoxNodeCr.className = "columnboxdiv";
        columnBoxNodeCr.id = `columndiv-${[i]}`;
        boxEl.appendChild(columnBoxNodeCr);
        for (let n = 0; n < userInput; n++) {
            smallBoxNodeCr = document.createElement("div");
            smallBoxNodeCr.className = "smallboxdiv";
            document.querySelector(`#columndiv-${[i]}`).appendChild(smallBoxNodeCr);
            }
    }
}
createGrid();

// Selector that targets all smallboxdivs, foreach loop with a mouseover event
// to change color of boxes
let smallBoxEl = document.querySelectorAll(".smallboxdiv");

function drawPixels() {
smallBoxEl.forEach(element => {
    // console.log(element);
    element.onmouseover = function(){element.style.backgroundColor = 'red'};
});
}
drawPixels();

let columnBoxEl = document.querySelector(".columnboxdiv");


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


// Reset button functionality, changes userinput variable to set new grid size,
// removes previous grid divs and runs the createGrid function
resetButtonEl.addEventListener('click', function(){
    userInput = prompt("Please enter the new canvas size in pixels, up to 100");
    smallBoxEl.forEach(element => {
        element.style.backgroundColor = "rgb(241, 245, 245)"
    });
    removeAllChildNodes(boxEl);
    createGrid();
    smallBoxEl = document.querySelectorAll(".smallboxdiv");
    drawPixels();
    console.log("clicked");
})