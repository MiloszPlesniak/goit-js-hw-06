function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
console.log(body)
const btn = document.querySelector(".change-color");
console.log(btn)
const infoColor = document.querySelector('.color')



btn.addEventListener('click', () => {
  const color = getRandomHexColor()
  body.style.backgroundColor = color
  infoColor.textContent = color
})


console.log(getRandomHexColor())