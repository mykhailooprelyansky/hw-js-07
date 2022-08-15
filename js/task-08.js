const inputRef = document.querySelector("#controls > input");
const buttonRenderRef = document.querySelector('[data-action="render"]');
const buttonDestroyRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector("#boxes");

const inputValue = inputRef.addEventListener("input", (e) => {
  const inputValue = +e.target.value;
  buttonRenderRef.addEventListener("click", () => {
    createBoxes(inputValue);
  });
});
buttonDestroyRef.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const createDiv = document.createElement("div");
    randomBgc(createDiv);
    doWidthHight(createDiv, i);
    boxesRef.append(createDiv);
  }
  console.log(boxesRef);
}
console.log(boxesRef);

function randomBgc(box) {
  box.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(
    0,
    255
  )}, ${getRandom(0, 255)})`;

  function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }
}
function doWidthHight(box, count) {
  console.log(count);
  let size = 30 + count * 10;
  if (count > 0) {
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
  } else {
    box.style.width = "30px";
    box.style.height = "30px";
  }
}
function destroyBoxes() {
  const links = boxesRef.querySelectorAll("div");
  console.log(links);
  links.forEach((link) => link.remove());
}
