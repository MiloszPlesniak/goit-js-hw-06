function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector('input')
const create = document.querySelector('button[data-create]')
const destroy = create.nextElementSibling;
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement('div');
    newBox.style.width = `${i*10+30}px` 
    newBox.style.height = `${i * 10 + 30}px`  
    newBox.style.backgroundColor = getRandomHexColor()
    boxes.append(newBox)
    
    
  }
}

function destroyBoxes() {
  boxes.innerHTML = ''
}

create.addEventListener('click', () => {
createBoxes(Number(input.value))
})
destroy.addEventListener('click', destroyBoxes)

const controls = document.querySelector('#controls');
console.log(controls.children[2])

