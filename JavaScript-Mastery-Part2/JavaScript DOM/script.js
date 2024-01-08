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
console.log(document.getElementById("main-heading").getAttribute("class"));

//Set attribute -> the setAttribute() method sets a new value to an attribute.
//document.getElementById("main-heading").setAttribute("class", "new-class");