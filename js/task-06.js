const inputRef = document.querySelector("#validation-input");
const dataInputRef = document.querySelector('[data-length="6"]');
const lengthInputRef = +dataInputRef.dataset.length;
inputRef.addEventListener("change", (e) => {
  const valueEvent = e.target.value;
  valueEvent.length === lengthInputRef
    ? inputRef.classList.add("valid")
    : inputRef.classList.add("invalid");
});
