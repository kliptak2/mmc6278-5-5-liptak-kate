// list global variables
var form = document.getElementById("add-todo")
var listEl = document.getElementById("todo-list")

// capture user inputs                       
form.onsubmit = function(capture) {
    // prevent default html form submission behavior (Alt: use return false at end of function)
    capture.preventDefault()
    var data = document.querySelector("input").value   // could I use form.value?
    console.log(data)
    // generate button
    var btn = document.createElement("button");
    btn.innerHTML = data;
    // generate li element
    var li = document.createElement("li");
    // put button in li element
    li.appendChild(button);
    // append li to ul#todo-list
    listEl.appendChild(li);
}

// add strikethrough when user clicks on button
li.onclick = function(){
    if(this.classList.contains("strikethrough")){
        // if user clicks button again, remove it from the list
        li.removeChild//something
    } else {
        this.classList.add("strikethough")
    }
}


// NOTES
// look up form.children (gives an array of children)

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