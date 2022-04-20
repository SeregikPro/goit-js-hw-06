const numberUlCategoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberUlCategoriesEl.length}`);

const nameCategoriesEl = document.querySelectorAll(".item")
    .forEach((el) =>
        console.log(`Category: ${el.querySelector("h2").textContent}
Elements: ${el.querySelectorAll("li").length}`))