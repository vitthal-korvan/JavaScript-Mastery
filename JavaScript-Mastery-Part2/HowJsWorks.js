// compilation in javascript:
//However, modern browsers use a technology called Just-In-Time (JIT) compilation, which compiles JavaScript code to executable bytecode just as it is about to run. This can improve the performance of JavaScript code, as the browser does not have to interpret each line of code every time the page is loaded.

// code execution in javascript:
//The browser then executes the bytecode, which is the compiled version of the JavaScript code.

// why compilation in javascript:
//Compiling JavaScript code to bytecode is a process that can be time-consuming and error-prone. However, it can be beneficial for performance and debugging. 


// How javascript code executes :
//JavaScript code is executed in a single-threaded environment, which means that it is executed one instruction at a time. This means that the browser has to wait for each instruction to be executed before moving on to the next one. This can lead to slow performance and a lack of responsiveness.



// what is global exection context :
//The global execution context is the top-level execution context that is created when the JavaScript code is executed. It contains the global object, which is the object that represents the global scope in JavaScript.

// The global object is an object that represents the global scope in JavaScript. It contains properties and methods that are available to all code in the JavaScript file.

// The global object is available in all JavaScript code, including code that is executed in the browser's console or in Node.js.


// what is local execution context :
//The local execution context is the execution context that is created when a function is called. It contains the function's parameters.  



// closures
console.log(this);//{} - in node.js
//window - in browser
//console.log(window);//ReferenceError: window is not defined -in node.js
//window - in browser
console.log(firstName);//undefined
var firstName = "Vitthal";
console.log(firstName);//Vitthal

// hoisting
console.log(myFunction);//undefined

console.log(fullName);//undefined

function myFunction(){
    console.log("this is my function");
}

var lastName = "Korvan"
var fullName = firstName + " " + lastName;
console.log(fullName);//Vitthal Korvan