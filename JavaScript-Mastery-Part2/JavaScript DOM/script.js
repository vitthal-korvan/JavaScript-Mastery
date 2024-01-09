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

//in getElementsByTagName(), getElementsByclass(), getElementsById() method,  we can't use forEach loop for iteration over elements. Becaue, it is not an array. 

/*
const elements = document.getElementsByTagName("a");
for (let i = 0; i < elements.length; i++) {
  elements[i].style.color = "green";
  elements[i].style.backgroundColor ="#fff";
  elememts[i].style.padding = "10px";
  elements[i].style.fontWeight = "bold";
}

*/

//Get multi elements using get elements by query selector:
//Get multiple elements using get elememts by query selector -> the querySelector() method returns the first element that matches a "specified CSS selector".

//in query selector we can use forEach loop to iterate over the elements.

const elements = document.querySelectorAll("a");
for (let i = 0; i < elements.length; i++) {
  elements[i].style.color = "green";
  elements[i].style.backgroundColor ="#fff";
  elememts[i].style.padding = "10px";
  elements[i].style.fontWeight = "bold";
}