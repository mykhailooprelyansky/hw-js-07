const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const listIngrRef = document.querySelector("#ingredients");
const createListIngr = (array, select) =>
  array.map((arr) => {
    const listRef = document.createElement("li");
    listRef.textContent = arr;
    listRef.classList.add("item");
    listRef.style.color = "red";
    select.appendChild(listRef);
    return listRef;
  });

console.log(createListIngr(ingredients, listIngrRef));
