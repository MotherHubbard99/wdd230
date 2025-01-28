const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

//if the function doesn't return a value, set it to falsy (an empty array: null or undefined)
let chaptersArray = getChapterList() || [];
//process each entry named chapter
chaptersArray.forEach(chapter => {
    displayList(chapter);
});


//Create a click event listened for the Add Chapter button
button.addEventListener("click", () => {
    //check to make the the input is not blank
    if (input.value != "") {
        displayList(input.value); //call the function that displays the submitted chapter
        chaptersArray.push(input.value); //add the chapter to the array
        setChapterList(); //update localStorage with new array
        input.value = ""; //clear the input
        input.focus(); //set the focus back on the input box
    }
});

//create displayList that receives the parameter named item
function displayList(item) {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    input.value = "";
};

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
};

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
};

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter(item => item !==chapter);
    setChapterList();
};