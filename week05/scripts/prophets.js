const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards");

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let birthday = document.createElement("p");
        let birthstate = document.createElement("p");

        //build the h2 content for setting the fullName
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthday.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthstate.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Build the image portrait
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.fullName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '350');
        portrait.setAttribute('height', '450');

        // Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(birthday);
        card.appendChild(birthstate);
        card.appendChild(portrait);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}


async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    /*for testing data retrieval*/
    /*console.table(data.prophets);*/
    displayProphets(data.prophets);
}

getProphetData();