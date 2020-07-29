// Lesson 2
const search = document.getElementById('search-books');
const bookList = document.getElementById('book-list');
console.log(search, bookList);

// Lesson 3
const search = document.getElementById('search-books');
const bookList = document.getElementById('book-list');
const titles = document.getElementsByClassName('title');
console.log(search, bookList);
console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));
Array.from(titles).forEach(function(title){
  console.log(title);
});

// Lesson 4
const titles = document.getElementsByClassName('title');
const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);
console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));
var books = document.querySelector('#book-list li .name');
console.log(books);
Array.from(titles).forEach(function(title){
  console.log(title);
books = document.querySelectorAll('#book-list li .name');
console.log(books);
Array.from(books).forEach(function(book){
  console.log(book);
});

// Lesson 5
const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);
var books = document.querySelector('#book-list li .name');
console.log(books);
books = document.querySelectorAll('#book-list li .name');
console.log(books);
const books = document.querySelectorAll('#book-list li .name');
Array.from(books).forEach(function(book){
  console.log(book);
  book.textContent += ' (Book title)';
});
const bookList = document.querySelector('#book-list');
bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This is how you add HTML content</p>';

// Lesson 6
const books = document.querySelectorAll('#book-list li .name');
const banner = document.querySelector('#page-banner');
Array.from(books).forEach(function(book){
  book.textContent += ' (Book title)';
});
console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node name is:', banner.nodeName);
console.log('#page-banner has child nodes:', banner.hasChildNodes());
const bookList = document.querySelector('#book-list');
bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This is how you add HTML content</p>';
const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);

// Lesson 7
const banner = document.querySelector('#page-banner');
const bookList = document.querySelector('#book-list');
console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node name is:', banner.nodeName);
console.log('#page-banner has child nodes:', banner.hasChildNodes());
console.log('book list parent element:', bookList.parentElement);
console.log('book list parent node:', bookList.parentNode);
const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);
console.log('all node children:');
Array.from(bookList.childNodes).forEach(function(node){
  console.log(node);
});
console.log('all element children:');
Array.from(bookList.children).forEach(function(node){
  console.log(node);
});
const titles = bookList.querySelectorAll('.name');
console.log('Book titles:');
Array.from(titles).forEach(function(title){
  console.log(title.textContent);
});

// Lesson 8
const bookList = document.querySelector('#book-list');
console.log('book list parent element:', bookList.parentElement);
console.log('book list parent node:', bookList.parentNode);
console.log('#book-list next sibling:', bookList.nextSibling);
console.log('#book-list next element sibling:', bookList.nextElementSibling);
console.log('#book-list previous sibling:', bookList.previousSibling);
console.log('#book-list previous element sibling:', bookList.previousElementSibling);
console.log('all node children:');
Array.from(bookList.childNodes).forEach(function(node){
  console.log(node);
});
console.log('all element children:');
Array.from(bookList.children).forEach(function(node){
  console.log(node);
});
const titles = bookList.querySelectorAll('.name');const list = document.querySelector('#book-list ul');
const listItems = document.querySelectorAll('#book-list ul li');
Array.from(listItems).forEach(function(item){
  item.addEventListener('click', (e) => {
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    console.log('child element to remove:', li);
    console.log('parent element to remove child from:', li.parentElement);
    li.parentNode.removeChild(li);
  }
  });
});
// prevent default behaviour
console.log('Book titles:');
Array.from(titles).forEach(function(title){
  console.log(title.textContent);
});
bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else!';

// Lesson 9
const list = document.querySelector('#book-list ul');
const listItems = document.querySelectorAll('#book-list ul li');
Array.from(listItems).forEach(function(item){
  item.addEventListener('click', (e) => {
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    console.log('child element to remove:', li);
    console.log('parent element to remove child from:', li.parentElement);
    li.parentNode.removeChild(li);
  }
  });
});
// prevent default behaviour

// Lesson 10
const list = document.querySelector('#book-list ul');
// delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    console.log('child element to remove:', li);
    console.log('parent element to remove child from:', li.parentElement);
    li.parentNode.removeChild(li);
  }
});
// prevent default behaviour
const link = document.querySelector('#page-banner a');
link.addEventListener('click', function(e){
  e.preventDefault();
  console.log('Navigation to', e.target.textContent, 'was prevented');
});

// Lesson 11
    li.parentNode.removeChild(li);{
  }
});
const forms = document.forms;
console.log(forms);
console.log(forms['add-book']);
Array.from(forms).forEach(function(form){
  console.log(form);
});
const addForm = forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);
});

// Lesson 12
const list = document.querySelector('#book-list ul'); {
const forms = document.forms;
// delete books
list.addEventListener('click', (e) => {
list.addEventListener('click', (e) => {
  }
 
});
const forms = document.forms;
console.log(forms);
console.log(forms['add-book']);
Array.from(forms).forEach(function(form){
  console.log(form);
});
// add books
const addForm = forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');
  // add text content
  bookName.textContent = value;
  deleteBtn.textContent = 'delete';
  // append to DOM
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
  //list.insertBefore(li, list.querySelector('li:first-child'));

// Lesson 13
  bookName.textContent = value;
  deleteBtn.textContent = 'delete';
  // add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');
  // append to DOM
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
  //list.insertBefore(li, list.querySelector('li:first-child'));
});

// Lesson 14


// Lesson 15
  li.appendChild(deleteBtn);
  list.appendChild(li);
});
// hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

// Lesson 16


// Lesson 17
    }
  });
});
// tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {
      if(panel == targetPanel){
        panel.classList.add('active');
      }else{
        panel.classList.remove('active');
      }
    });
  }
});

// Lesson 18
const list = document.querySelector('#book-list ul');
const forms = document.forms;
document.addEventListener('DOMContentLoaded', function(){
// delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});
  const list = document.querySelector('#book-list ul');
  const forms = document.forms;
// add books
const addForm = forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  // delete books
  list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });
  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');
  // add books
  const addForm = forms['add-book'];
  addForm.addEventListener('submit', function(e){
    e.preventDefault();
  // add text content
  bookName.textContent = value;
  deleteBtn.textContent = 'delete';
    // create elements
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');
  // add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');
    // add text content
    bookName.textContent = value;
    deleteBtn.textContent = 'delete';
  // append to DOM
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});
    // add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
// hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});
    // append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
// filter books
const searchBar = forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach((book) => {
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(e.target.value) != -1){
      book.style.display = 'block';
  // hide books
  const hideBox = document.querySelector('#hide');
  hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
      list.style.display = "none";
    } else {
      book.style.display = 'none';
      list.style.display = "initial";
    }
  });
});
// tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {
      if(panel == targetPanel){
        panel.classList.add('active');
      }else{
        panel.classList.remove('active');
  // filter books
  const searchBar = forms['search-books'].querySelector('input');
  searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach((book) => {
      const title = book.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(e.target.value) != -1){
        book.style.display = 'block';
      } else {
        book.style.display = 'none';
      }
    });
  }
});
  });
  // tabbed content
  const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');
  tabs.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
      const targetPanel = document.querySelector(e.target.dataset.target);
      Array.from(panels).forEach((panel) => {
        if(panel == targetPanel){
          panel.classList.add('active');
        }else{
          panel.classList.remove('active');
        }
      });
    }
  });
})





