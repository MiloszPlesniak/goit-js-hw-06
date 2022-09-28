const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')
for (let i = 0; i < ingredients.length; i++) {
  const newElement = document.createElement("li");
  newElement.textContent = ingredients[i]
  newElement.classList.add('item')
  ingredientsList.append(newElement)

}
