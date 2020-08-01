const list = document.querySelector("#book-list ul")

//Delete books.
list.addEventListener("click", function(e) {
    if(e.target.className == "delete") {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

//Add book-list.
const addForm = document.forms["add-book"];
addForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const value = addForm.querySelector("input[type = 'text']").value;

//Create elements.
const li = document.createElement("li");
const bookName = document.createElement("span");
const deleteBtn = document.createElement("span");

//Add content.
deleteBtn.textContent = "delete";
bookName.textContent = value;

//Add classes.
bookName.classList.add("name");
deleteBtn.classList.add("delete");


//Append to document.
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);



});

const hideBox = document.querySelector("#hide");
hideBox.addEventListener("change", function(e) {
    if(hideBox.checked) {
        list.style.display = "none";
    } else { 
        list.style.display = "initial";
    }
});
