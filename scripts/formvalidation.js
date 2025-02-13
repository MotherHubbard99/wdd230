//Make sure the passwords match
const pw1 = document.querySelector("#password");
const pw2 = document.querySelector("#password2");
const fb = document.querySelector("#feedback");

pw2.addEventListener("focusout", controlar);


function controlar() {
    if (pw1.value !== pw2.value) {
        fb.textContent = "❗Passwords DO NOT MATCH!";
        //message.style.visibility = "show";
        pw2.style.backgroundColor = "#fff0f3";
        pw2.value = "";
        pw2.focus();
    } else {
        //message.style.display = "none";
        fb.textContent = ""
        pw2.style.backgroundColor = "#fff";
        pw2.style.color = "#000";
    }
}

//Email address
document.getElementById("email").addEventListener("input", function (event) {
    const emailInput = event.target;
    const errorMessage = document.getElementById("error-message");

    if (emailInput.validity.patterMismatch) {
        errorMessage.textContent = "Invalid email format. Please use a BYUI email address."
    } else {
        errorMessage.textContent = ""
    }
});

//Add the Page Range Slider
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

