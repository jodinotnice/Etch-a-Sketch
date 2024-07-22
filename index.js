const body = document.body;

const buttonInput = document.createElement("button");
buttonInput.classList.add("buttonStyle");
buttonInput.innerText = "Change Grid number";

const container = document.createElement("div");
container.classList.add("containerFlex");

const reset = document.createElement("button");
reset.innerText = "reset the grids";
buttonInput.classList.add("buttonStyle");

body.appendChild(buttonInput);
body.appendChild(container);
body.appendChild(reset);

function createGrid(gridNumber) {
  container.innerHTML = "";
  for (let i = 1; i <= gridNumber * gridNumber; i++) {
    const grid = document.createElement("div");
    grid.innerText = "Square";
    grid.classList.add("gridStyle");
    grid.addEventListener("mouseover", function () {
      grid.style.backgroundColor = "black";
    });
    container.appendChild(grid);
  }
}

createGrid(16);

buttonInput.addEventListener("click", function () {
  const gridInput = prompt("how many grid do you want ? (Max limit: 100)");
  const gridNumber = parseInt(gridInput);

  if (!isNaN(gridNumber) && gridNumber > 0 && gridNumber <= 100) {
    return createGrid(gridNumber);
  } else {
    alert("Please enter a number between 1 and 100!");
  }
});

reset.addEventListener("click", function () {
  createGrid(16);
});
