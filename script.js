// A for loop to make the boxes, it should scale to the size of the container
let container = document.querySelector("#container");

function makeBoxes() {
  for (let i = 0; i < 256; i++) {
    let boxesItem = document.createElement("div");
    boxesItem.className = "boxes";
    container.appendChild(boxesItem);
  }
}

makeBoxes();

// HTML node Selectors and decalrations
