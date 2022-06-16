// list global variables
var form = document.getElementById("add-todo")
var listEl = document.getElementById("todo-list")

// capture user inputs                       
form.onsubmit = function(capture) {
    // prevent default html form submission behavior (Alt: use return false at end of function)
    capture.preventDefault()
    var data = document.querySelector("input").value   // could I use form.value?
    console.log(data)
    // generate li element
    var li = document.createElement("li");
    // append li to ul#todo-list
    listEl.appendChild(li);
    // generate button & put it in li element
    var btn = document.createElement("button");
    btn.innerHTML = data;
    li.appendChild(button);
}

// execute a function when user clicks on list items
function listClicks(){
// add strikethrough when list item is clicked. Use onclick event
// if list item has a strikethrough when clicked, remove it from list

}




//*************** To Do *********************
// look up form.children (gives an array of children)


// NOTES

// Clear out data - Manual Way
// form.onsubmit = function (e){
//     e.preventDefault()
//     var input = document.querySelector("input")
//     console.log(input.value)
//     input.value = ""
// }

// Clear out data - Simpler Way (*if html is written correctly)
// form.onsubmit = function (e){
//     e.preventDefault()
//     var data = this.firstName.value
//     console.log(data)
//     this.firstNAme.value = ""
// }


// How to make a button that displays the captured data
// const btn = document.createElement("button");
// btn.innerHTML = data;
// document.body.appendChild(btn);