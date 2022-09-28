const submit = document.querySelector(".login-form");


console.log(submit)



submit.addEventListener("submit", checkForm)
function checkForm(event) {
    event.preventDefault();
    const emailInput = event.target[0].value;
    const paswordInput = event.target[1].value;

    if (emailInput.length === 0 || paswordInput.length === 0) {
        alert("Uzupełnij wszystkie pola formularza")
    } else {
        const obj = {
            login: emailInput,
            pasword: paswordInput,
        } 
        console.log(obj)
        submit.reset()
    }
   
    
}
