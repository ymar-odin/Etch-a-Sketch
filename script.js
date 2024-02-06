const bodyEl = document.querySelector("body");
const boxNodeCr = document.createElement("div");
boxNodeCr.className = "boxdiv";
bodyEl.appendChild(boxNodeCr);

const boxEl = document.querySelector(".boxdiv");
let rowBoxNodeCr;
let smallBoxNodeCr;

// Loop that creates a 16x16 grid
for(let i = 0; i < 16; i++) {
    rowBoxNodeCr = document.createElement("div");
    rowBoxNodeCr.className = "rowboxdiv";
    rowBoxNodeCr.id = `rowdiv-${[i]}`;
    boxEl.appendChild(rowBoxNodeCr);
    for (let n = 0; n < 16; n++) {
        smallBoxNodeCr = document.createElement("div");
        smallBoxNodeCr.className = "smallboxdiv";
        document.querySelector(`#rowdiv-${[i]}`).appendChild(smallBoxNodeCr);
        }
}

// Selector that targets all smallboxdivs, foreach loop with a mouseover event
// to change color of boxes
const smallBoxEl = document.querySelectorAll(".smallboxdiv");

smallBoxEl.forEach(element => {
    // console.log(element);
    element.onmouseover = function(){element.style.backgroundColor = 'red'};
});