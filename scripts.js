const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#passwordConfirmation");

passwordConfirmation.onkeyup = () => {
    if (password.value && password.value != passwordConfirmation.value) {
        passwordConfirmation.classList.add("error");
        passwordConfirmation.setCustomValidity("Passwords do not match.");
        passwordConfirmation.reportValidity();
    } else {
        passwordConfirmation.classList.remove("error");
        passwordConfirmation.setCustomValidity("");
    }
};

password.addEventListener('input', (e) => {
    if (password.validity.tooShort) {
        password.setCustomValidity("Password must be at least eight characters long.");
        password.reportValidity();
    } else {
        password.setCustomValidity("");
    }
});
