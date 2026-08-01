// A for loop to make the boxes, it should scale to the size of the container
let container = document.querySelector("#container");

function makeBoxes() {
  // BOX CREATING FUNCTION
  for (let i = 0; i < 256; i++) {
    let boxesItem = document.createElement("div");
    boxesItem.className = "boxes";
    container.appendChild(boxesItem);
  }

  //   ADD EVENT LISTENERS FOR EACH BOX
  let boxes = document.querySelectorAll(".boxes");
  console.log(boxes);
  boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
      console.log(box);
      box.style.backgroundColor = "blue";
    });
  });
}

makeBoxes();

// HTML node Selectors and decalrations
