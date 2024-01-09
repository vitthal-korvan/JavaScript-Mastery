//Document Object Model

//DOM Manipulation-> the dom manipulation is the process of changing the html elements in the web page by using javascript.
//DOM tree-> the dom tree is the structure of the html page.

//select an element by id:

//Get element by Id -> the getElementById() method returns an element with a specified value.
// let element = document.getElementById("myElement");
//document.getElementById("main-heading").innerHTML = "Hello World";

//select an element by class:

//Get element by class name -> the getElementsByClassName() method returns a collection of all elememts with a specified class name.
//const elements = document.getElementsByClassName("example");
//document.getElementsByClassName("headline")[0].innerHTML = "Hello World";

//select an element using query selector:

//Get element by query selector -> the querySelector() method returns the first element that matches a "specified CSS selector".
//const element = document.querySelector(".example");
//document.querySelector("h1").innerHTML = "Hello World";
//document.querySelector("#main-heading").innerHTML = "Vitthal Korvan";

//select an element using query selector all:

//Get element by query selector all -> the querySelectorAll() method returns a NodeList of all elements that match a specified CSS selector.
//const elements = document.querySelectorAll(".example");
//document.querySelectorAll("h1")[0].innerHTML = "Hello World";

//change text:
//Change text content -> the textContent property sets or returns the text content of an element.
//document.getElementById("main-heading").textContent = "Hello World";

//inner text:
//Inner text -> the innerText property sets or returns the text content of an element.
//document.getElementById("main-heading").innerText = "Hello World";

//change the style of an element:
//Change the style of an element -> the style property allows you to set or return the style of an element.
//document.getElementById("main-heading").style.color = "red";

//Get and Set attribute:
//Get attribute -> the getAttribute() method returns the value of a specified attribute.
//document.getElementById("main-heading").getAttribute("class");

//Set attribute -> the setAttribute() method sets a new value to an attribute.
//document.getElementById("main-heading").setAttribute("class", "new-class");

//Get multi elements using get elements by id:
//Get multiple elements using get elememts by id -> the getElementsById() method returns a collection of all elements with a specified id.
//const elements = document.getElementById("main-heading");
//document.getElementById("main-heading").innerHTML = "Hello World";

//Get multi elements using get elements by class name:
//Get multiple elements using get elememts by class name -> the getElementsByClassName() method returns a collection of all elements with a specified class name.
//const elements = document.getElementsByClassName("example");
//document.getElementsByClassName("headline")[0].innerHTML = "Hello World";

//Get multiple elements using get elememts by tag name:
//Get multiple elements using get elememts by tag name -> the getElementsByTagName() method returns a collection of all elements with a specified tag name.

//in getElementsByTagName(), getElementsByclass(), getElementsById() method,  we can't use forEach loop for iteration over elements. Becaue, it is not an array. they give HTMLCollection as a result.

//const elements = document.getElementsByTagName("a");
//simple for loop:
/*

for (let i = 0; i < elements.length; i++) {
  elements[i].style.color = "green";
  elements[i].style.backgroundColor ="#fff";
  elememts[i].style.padding = "10px";
  elements[i].style.fontWeight = "bold";
}

*/

//for of loop:
/*
for(let element of elements) {
  element.style.color = "green";
    element.style.backgroundColor = "#fff";
    elememt.style.padding = "10px";
    element.style.fontWeight = "bold";
}
*/

//Get multi elements using get elements by query selector:

//Get multiple elements using get elememts by query selector -> the querySelector() method returns the first element that matches a "specified CSS selector".
//it gives node list as a result.
//in query selector we can use forEach loop to iterate over the elements.

//let elements = document.querySelectorAll("a");

//simple for loop:
/*
for (let i = 0; i < elements.length; i++) {
  console.log(elements[i]);
  elements[i].style.color = "green";
  elements[i].style.backgroundColor = "#fff";
  elememts[i].style.padding = "10px";
  elements[i].style.fontWeight = "bold";
}
*/

//for of loop:
/*
for(let element of elements) {
  element.style.color = "green";
    element.style.backgroundColor = "#fff";
    elememt.style.padding = "10px";
    element.style.fontWeight = "bold";
}
*/

//for Each loop:
/*
elements.forEach(function(element) {
  element.style.color = "green";
    element.style.backgroundColor = "#fff";
    elememt.style.padding = "10px";
    element.style.fontWeight = "bold";
});
*/

// innerHtML:
// += is used for appending the content to the existing content.
//innerHTML is used to get the content of the element.
// const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1>Inner html changed </h1>";
// headline.innerHTML += "<button class= \"btn\"> Learn More </button>"
// console.log(headline.innerHTML);

// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);
//classList property is used to get the list of classes of the element.

// sectionTodo.classList.add('bg-dark'); //for adding class
// sectionTodo.classList.remove("container"); // for removal of class
// const ans = sectionTodo.classList.contains("container"); //checks if the class is present or not.
// console.log(ans);
// sectionTodo.classList.toggle("bg-dark"); // classList.toggle() method toggles the class. if class is present then it removes the class, if class is not present then it adds the class.
// sectionTodo.classList.toggle("bg-dark");
//const header = document.querySelector(".header");
// header.classList.add("bg-dark");
//console.log(header.classList);

// Add new HTML elements to page
// innerHTML to add html element

//const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML)
// todoList.innerHTML = "<li>New Todo 2 </li>"
// todoList.innerHTML += "<li>New Todo </li>";
// todoList.innerHTML += "<li>teach students </li>";

// when you should use it , when you should not
//todoList.insertAdjacentElement("afterbegin", '<li>Hi</li>')

// document.createElement()
// append
// prepend
// remove
// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach students");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.prepend(newTodoItem);
// todoList.append(newTodoItem);
// console.log(newTodoItem);
// const todo1 = document.querySelector('.todo-list li');
// todo1.remove();
// console.log(todo1)

// before
// after

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.after(newTodoItem);

// elem.insertAdjacentHTML(where, html)
// beforebegin
// afterbegin;
// beforeend;
// afterend;

// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend", "<li>Teach Students </li>");

// clone nodes: clone nodes means to copy the node and its children to another location in the DOM tree.
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// const li2 = li.cloneNode(true); //cloneNode() will clone the node and its children. cloneNode(true) will `deep` clone the node and its children.
// ul.append(li);
// ul.prepend(li2);

// static list vs live list:

//querySelectorAll will give us static list.
//getElememtsByClassName() will give us live list.
//getElememtsByTagName() will give us live list.
//getElememtsById() will give us live list.

// const ul = document.querySelector(".todo-list");
// const listItems = ul.getElementsByTagName("li");
// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";
// ul.append(sixthLi);
// console.log(listItems);

// how to get the dimension of element
// height width
const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
console.log(info);
