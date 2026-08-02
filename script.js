let container = document.querySelector("#container");

function makeBoxes() {
  // IF CONTAINER IS NOT == 0 THEN EMPTY THE CONTAINER
  if (container.childElementCount !== 0) {
    container.replaceChildren();
  }

  // LOGIC FOR MAKING BOXES
  console.log(container.childElementCount !== 0);
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

// BUTTON CALL TO RESET THE BOX
const resetButton = document.querySelector("#resetButton");

resetButton.addEventListener("click", () => {
  const input = document.querySelector("#input");
  makeBoxes(input.value);
  input.value = "";
});
