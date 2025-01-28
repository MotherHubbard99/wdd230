const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
//Create a click event listened for the Add Chapter button
button.addEventListener("click", () => {
    //check to make the the input is not blank
    if (input.value !=""){
        //create a list element
        const li = document.createElement("li");
        //create a delete button
        const deleteButton = document.createElement("button");
        //populate the list element with the input value
        li.textContent = input.value;
        //populate the delete button textContent with an X
        deleteButton.textContent = "❌";
        //append the li element with the delete button
        li.append(deleteButton);
        //append the li element to the unordered 
        list.append(li);
        //add an event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener("click", function()  {
            list.removeChild(li);
            input.focus();
        });
        //send the focus to the input element
        input.focus();
        //change the input value to an empty string to clean up the user interface 
        input.value = "";
        
    } else {
        console.log("Please enter a book and chapter.")
        input.focus();
    }
});


