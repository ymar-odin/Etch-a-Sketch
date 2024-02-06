const bodyEl = document.querySelector("body");
const boxNodeCr = document.createElement("div");
boxNodeCr.className = "boxdiv";
bodyEl.appendChild(boxNodeCr);

const boxEl = document.querySelector(".boxdiv");
let rowBoxNodeCr;
let smallBoxNodeCr;

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