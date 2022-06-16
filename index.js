// list global variables
var form = document.getElementById("add-todo")
var listEl = document.getElementById("todo-list")

// capture user inputs                       
form.onsubmit = function(capture) {
    capture.preventDefault()            // Supposed to use but not working. Removes default html form submission behavior. Alt return false

}

// execute a function when user clicks on list items
function listClicks(){
                          // add strikethrough when list item is clicked
                          // if list item has a strikethrough when clicked, remove it from list 
}

// make user input appear in list using appendChild(). Don't need to hold list items in an array bc we're appending the DOM
// form.children - gives an array of children
// .value
// look up javascript createElement
// look up javascript button add.onclick