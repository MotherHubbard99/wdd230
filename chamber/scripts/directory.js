//GRID and LIST 
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});


//DIRECTORY.HTML pulling /data/members.json
document.addEventListener("DOMContentLoaded", function () {
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const membersContainer = document.getElementById('members-container');
            data.forEach(member => {
                const memberDiv = document.createElement('div');
                memberDiv.classList.add("member-card");
                memberDiv.innerHTML = `
                    <img src="${member.image}" alt="${member.name}">
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p><a href="${member.url}" target="_blank">${member.url}</a></p>
                `;
                membersContainer.appendChild(memberDiv);
            });
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});
