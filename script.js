// Selecting necessary elements 
var popUpOverlay = document.querySelector(".pop-up-overlay");
var popUpBox = document.querySelector(".pop-up-box");
var addPopUpButton = document.getElementById("add-pop-up-button");

var container = document.querySelector(".container");
var addBook = document.getElementById("add-book");
var bookTitleInput = document.getElementById("book-title-input");
var bookAuthorInput = document.getElementById("book-author-input");
var bookDescriptionInput = document.getElementById("book-description-input");

// Show pop-up when + button is clicked 
addPopUpButton.addEventListener("click", function() {
    popUpOverlay.style.display = "block";
    popUpBox.style.display = "block";
});

// Cancel pop-up and prevent form submission
var cancelPopUp = document.getElementById("cancel-pop-up");
cancelPopUp.addEventListener("click", function(event) {
    event.preventDefault();
    popUpOverlay.style.display = "none";
    popUpBox.style.display = "none";
});

// Add new book entry 
addBook.addEventListener("click", function(event) {
    event.preventDefault();
    
    // Create new book container div
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    
    // Fill the div with dynamic content using template literals
    div.innerHTML = `
        <h2>${bookTitleInput.value}</h2>
        <h5>${bookAuthorInput.value}</h5>
        <p>${bookDescriptionInput.value}</p>
        <button onclick="deleteBook(event)">Delete</button>
    `;
    
    // Append the new div to the main container 
    container.append(div);
    
    // Hide pop-up after adding
    popUpOverlay.style.display = "none";
    popUpBox.style.display = "none";
});

// Delete book function 
function deleteBook(event) {
    // Removes the parent element of the clicked button (the book card) 
    event.target.parentElement.remove();
}