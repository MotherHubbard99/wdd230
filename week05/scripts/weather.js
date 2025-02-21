const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

//const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=c5c949e9cb0fdc6349341c62c7907378"

const url = "https://api.openweathermap.org/data/2.5/onecall?lat=49.75&lon=6.64&exclude=hourly,daily&appid=c5c949e9cb0fdc6349341c62c7907378"

//Define an asynchronous function named "apiFetch()" that uses a try block to handle errors.
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data) //for testing only
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);

    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&units=imperial;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
}

apiFetch();
