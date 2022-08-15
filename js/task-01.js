const categoriesRef = document.querySelector("ul#categories");
const itemsRef = document.querySelectorAll("li.item");
const itemsAllRef = document.querySelectorAll("li.item>ul");
console.log(`В списке ${categoriesRef.childElementCount} категории.`);
const funcSelector = (items) =>
  items.forEach((item) => {
    console.log(`Категорія: ${item.firstElementChild.textContent}`),
      console.log(
        `Кількість елементів: ${item.lastElementChild.childElementCount}`
      );
  });

funcSelector(itemsRef);
