// let banner = document.getElementById("page-banner");

// let bookList = document.getElementById("book-list");

// document.getElementsByClassName("title");

// document.getElementsByTagName("li");

let titles = document.getElementsByClassName("title");


// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function(item) {
    console.log(item);
})
