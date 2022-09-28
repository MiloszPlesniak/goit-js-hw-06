const input = document.querySelector('#validation-input');
const check = () => {
    let inputLength = input.dataset.length
    if (input.value.length === Number(inputLength)) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    } else if (input.value.length !== Number(inputLength)) {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
}

input.addEventListener('blur', check)



