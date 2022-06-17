// list global variables
var form = document.getElementById("add-todo")
var listEl = document.getElementById("todo-list")
// function onlySpaces(str) {
//     return /^\s*$/.test(str);
//   }

// capture user inputs                       
form.onsubmit = function(capture) {
    // prevent default html form submission behavior (Alt: use return false at end of function)
    capture.preventDefault()
    var data = document.querySelector("input").value   // could I use form.value?
    console.log(data)
    // check that data isn't blank
    if(!data || onlySpaces()) return

    // generate li element
    var li = document.createElement("li");
    // put something in it
    var btn = document.createElement("button");
    btn.innerHTML = data;
    // put button in li element
    li.appendChild(btn);
    // append li to ul#todo-list
    listEl.appendChild(li);
    //clear out text box
    document.querySelector("input").value = ""
    // add strikethrough when user clicks on button. Remove button if user clicks again
    btn.onclick = function(){
        if(btn.style.cssText.includes ('text-decoration: line-through')){
            listEl.removeChild(li)
        } else {
            btn.style.cssText += 'text-decoration: line-through';
        }
    }
}


// NOTES
// form.children (gives an array of children)

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

//what do I need to pass into this? trying to get a = true
