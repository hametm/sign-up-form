const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#passwordConfirmation");

passwordConfirmation.onkeyup = () => {
    if (password.value && password.value != passwordConfirmation.value) {
        passwordConfirmation.classList.add("error");
        console.log("No match");
    } else {
        passwordConfirmation.classList.remove("error");
        console.log("It's a match!");
    }
};
