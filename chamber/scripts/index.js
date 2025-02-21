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

//BANNER ONLY on Mon, Tues, and Wed
document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("banner");
    const closeBanner = document.getElementById("closeBanner");
    const today = new Date().getDay();
    if (today === 1 || today === 2 || today === 3 || today === 4) {
        banner.style.display = "block";
    }
    //allow the user to close the banner
    closeBanner.addEventListener("click", function () {
        banner.style.display = "none";
    })
});

//Company spotlights members.json file

[
    {
        "name": "Burly Burger",
        "address": "2572 E South Weber Dr, South Weber, Utah 84405",
        "phone": "801-479-7459",
        "url": "https://burlyburger.com/",
        "image": "images/burlyburger.webp",
        "membership": "silver",
        "info": "GET SOME BURGER IN YOUR BEARD! We make burgers fresh, tasty and bigger than most people can eat..."
    },
    {
        "name": "Sodalicious",
        "address": "2532 S South Weber drive, South Weber, Utah 84405",
        "phone": "385-835-2864",
        "url": "https://mysodalicious.com",
        "image": "images/sodalicious.webp",
        "membership": "bronze",
        "info": "MIXOLOGY: Let us help you find your perfect drink."
    },
    {
        "name": "Little Caesars",
        "address": "2572 E South Weber Dr Ste 1, South Weber, UT 84405",
        "phone": "801-528-7749",
        "url": "https://littlecaesars.com/en-us/store/11704/",
        "image": "images/littlecaesers.webp",
        "membership": "bronze",
        "info": "Hot N Ready pizza to go"
    },
    {
        "name": "Maverick",
        "address": "2577 S Weber Dr, South Weber, UT 84405",
        "phone": "801-479-7918",
        "url": "https://locations.maverik.com/ut/south-weber/2577-south-weber-drive",
        "image": "images/maverik.webp",
        "membership": "gold",
        "info": "Adventure's First Stop"
    },
    {
        "name": "Morty's Car Wash",
        "address": "7723 S 2700 E, South Weber, Utah 84405",
        "phone": "385-432-0761",
        "url": "https://mortyscarwash.com/contact/",
        "image": "images/mortys.webp",
        "membership": "bronze",
        "info": "Convenient, state-of-the-art car wash in South Weber, Utah."
    },
    {
        "name": "ski 'N see",
        "address": "2532 South Weber Drive, South Weber, Utah 84405",
        "phone": "801-462-0960",
        "url": "https://www.skinsee.com/locations/south-weber/",
        "image": "images/ski.webp",
        "membership": "gold",
        "info": "Utah's Local Ski & Board Rental Shop"
    },
    {
        "name": "Mountain Land Physical Therapy",
        "address": "2572 South Weber Drive Ste. 5, South Weber, Utah 84405",
        "phone": "801-479-7045",
        "url": "https://www.mlpt.com/southweber/",
        "image": "images/mountain.webp",
        "membership": "gold",
        "info": "Physical Therapy"
    }
