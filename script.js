let container = document.querySelector("#container");
makeBoxes(16);
function makeBoxes(userInput) {
  // IF CONTAINER IS NOT == 0 THEN EMPTY THE CONTAINER
  if (container.childElementCount !== 0) {
    container.replaceChildren();
  }

  // LOGIC FOR MAKING BOXES

  for (let i = 0; i < userInput * userInput; i++) {
    let boxesItem = document.createElement("div");
    boxesItem.style.width = `${800 / userInput}px`;
    boxesItem.style.height = `${800 / userInput}px`;
    boxesItem.className = "boxes";
    container.appendChild(boxesItem);
  }

  //   ADD EVENT LISTENERS FOR EACH BOX
  let boxes = document.querySelectorAll(".boxes");
  boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
      box.style.backgroundColor = "blue";
    });
  });
}

// BUTTON CALL TO RESET THE BOX
const resetButton = document.querySelector("#resetButton");
let previousUserInput = 16;
resetButton.addEventListener("click", () => {
  const input = document.querySelector("#input");
  if (input.value <= 100 && input.value != 0) {
    makeBoxes(input.value);
    previousUserInput = input.value;
  } else if (input.value == 0) {
    console.log(previousUserInput);
    makeBoxes(previousUserInput);
  } else {
    alert(
      "That size is either too big or not a number, please enter a number from 1-100",
    );
  }
  input.value = "";
});
