const categorRef = document.querySelector("#categories");
console.dir(categorRef);
console.dir(categorRef.lastElementChild.lastElementChild);

console.log(`В списке ${categorRef.childElementCount} категории`);

const titleItemRef = document.querySelector("h2");
console.log(`Категория: ${titleItemRef.textContent}`);

const getEl = document.getElementsById("categories");
console.log(getEl);

// const numbItemRef = document.querySelectorAll(".item");
// console.log(numbItemRef);
// const funct = (arrays) => arrays.forEach((array) => array);
// console.log(funct(numbItemRef));
// // console.log(funct(numbItemRef));

// //   `Количество елементов: ${numbItemRef.lastElementChild.childElementCount}`
// // );
