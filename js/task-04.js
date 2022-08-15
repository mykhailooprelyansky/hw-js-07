const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
const spanRef = document.querySelector("#value");

let counterValue = spanRef.textContent;

const increment = () => {
  spanRef.textContent = ++counterValue;
};
const decrement = () => {
  spanRef.textContent = --counterValue;
};
decrementRef.addEventListener("click", decrement);
incrementRef.addEventListener("click", increment);
