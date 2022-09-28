let counterValue = 0;
const up = document.querySelector('button[data-action="increment"]')
const down = document.querySelector('button[data-action="decrement"]')

const value = document.querySelector('#value')
value.textContent = 0



const addValue = () => {
    counterValue += 1
    value.textContent = counterValue
}
const discrValue = () => {
    counterValue -= 1
    value.textContent = counterValue
}

up.addEventListener('click', addValue);
down.addEventListener('click', discrValue);
