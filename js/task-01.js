const category = document.querySelectorAll(".item")
console.log(`Number of categories: ${category.length}`)
category.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});