const numberUlCategoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberUlCategoriesEl.length}`);

const nameUlCategoriesEl = document.querySelectorAll(".item")
    .forEach((el) =>
        console.log("Category:", el.querySelector("h2").textContent))