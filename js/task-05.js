let textInput = document.querySelector("#name-input");
let output = document.querySelector("#name-output");


textInput.addEventListener('input', () => {
    output.textContent = textInput.value
    if (textInput.value === "") {
        output.textContent = "Anonymous"
    }
})


