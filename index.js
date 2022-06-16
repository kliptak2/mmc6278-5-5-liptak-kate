// list global variables
var inputField = ""
var inputFieldEl = document.getElementById("add-todo")
var listField = ""
var listFieldEl = document.getElementById("todo-list")

// make a function for actions that need to happen when page loads
function onPageLoad(){
    inputFieldEl.innerHTML = inputField
    listFieldEl.innerHTML = listField
}

// execute a function when user presses Enter key or Add button
var submit = document.getElementById("add-todo");
submit.addEventListener("keypress", function(addItem){     // or form.onsubmit = function(event){} ?
    if (addItem.key === "Enter"){
        addItem.preventDefault();                       // removes default html form submission behavior
        document.getElementById("button").click();
    }
});

// capture user inputs
var form = document.querySelector("form")
form.onsubmit = function(event) {            // attach an event to the form with an anonymous function
    e.preventDefault()                      
    var listItem = event.listItem//something else           // make user input appear in list / appendChild(). Don't need to hold list items in an array bc we're appending the DOM
}

// execute a function when user clicks on list items
function listClicks(){
                          // add strikethrough when list item is clicked
                          // if list item has a strikethrough when clicked, remove it from list 
}

