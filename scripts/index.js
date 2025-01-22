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


