//get the current year
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

//set dark mode
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	//main.classList.toggle()
	if (modeButton.textContent.includes("😎")) {
		main.style.background = "#000";
		main.style.color = "white";
		modeButton.textContent = "🌞";
	}
	else {
		//keep the background to what is on the css file 
		main.style.background = "#c8c3cc";
		main.style.color = "black";
		modeButton.textContent = "😎";
	}
})

//set number of visits
//1️⃣ initialize display element variable
const visitsDisplay = document.querySelector(".visits");
//2️⃣ get the stored value for the numVisits-ls KEY in localStorage if it exists, If the numVisits KEY is missing, then assign 0 to the numVisits variable
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
//3️⃣ Determine if this is the first visit or display the number of visits. 
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
//4️⃣ increment the number of visits by 1 
numVisits++;

//5️⃣store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);
//a client can view the localStorage data using the Application panel in the browser's DevTools - check it out on any major site


