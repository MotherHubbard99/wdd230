//get the current year :)
const currentYear = new Date().getFullYear();

//insert the current year into the element with id="current-year"
document.getElementById('current-year').textContent = currentYear;

//get the last modified date of the doc
const lastModified = document.lastModified;
//display the last modified date in the element with the id="last-modified"
document.getElementById('last-modified').textContent = lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//display a welome message if this is the user's first visit
const firstVisitElement = document.querySelector("#firstVisit");
//check if firstVisit is in localStorage
const IsFirstVisit = localStorage.getItem("firstVisit");
//if it's the user's first visit
if (!IsFirstVisit) {
    firstVisitElement.textContent = "Welcome! Let us know if you have any questions.";
    //store first visit on localStorage
    localStorage.setItem("firstVisit", "true");
} else {
    //Display welcome back message
    firstVisitElement.textContent = "Welcome Back!"
}

// Set the value of the hidden input field with the current date and time
document.getElementById("timestamp").value = new Date().toISOString();
