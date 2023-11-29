console.log("Hey! JavaScript");

/*
"use strict" is a directive that tells the JavaScript engine to run
 the code in strict mode. Strict mode is a set of rules that make
 JavaScript code more secure and easier to write.
 1. Preventing errors
 2. Improving performance
 3. Making code more readable
*/

("use strict");

/*
 variables can store some information
 we can use that information later
 we can change that information later
*/

// declare a variable :
var myName = "Vitthal";

// use a variable :
console.log(myName); //Vitthal

// change value :
myName = "Korvan";
console.log(myName); //kotvan

// rules for naming variables

// you cannot start with number
// example :-
// 1value (invalid)
// value1 (valid)

var value1 = 8;
console.log(value1); //8

// you can use only undersore _ or dollar symbol
// first_name (valid)
// _firstname (valid)

// first$name (valid)
// $firstname (valid)

// you cannot use spaces
// var first_name = "vitthal_korvan"; // snake case writing
// var firstName = "vitthalKorvan"; // camel case writing
// first name (invalid) -> No spaces allowed

// convention :
// start with small letter and use camelCase

// let keyword :
// declare variable with let keyword

let FirstName = "Vitthal";
FirstName = "Korvan";
console.log(FirstName); //Korvan

/*
we can declare let variable with one name
only once. in Var we can do it number of
times.
*/

var a = 10;
var a = 19;
var a = 29;
var a = 1;
console.log(a); //1

// declare constants :

const pi = 3.14;
console.log(pi); //3.14

// String indexing :

let firstName = "Vitthal";

//  V   i   t   t   h   a   l
//  0   1   2   3   4   5   6

// console.log(firstName[0]);
// length of string
// firstName.length

console.log(firstName.length); //7

console.log(firstName[firstName.length - 2]); //a

// last Index : length - 1

//String functions :
// trim() -> removes whitespaces
firstName = firstName.trim();
// toLowerCase() -> converts to lower case
firstName = firstName.toLowerCase();

// start index -> 0
// end index -> length - 1

//charAt()
var str = "Vitthal Korvan!";
var char = console.log(str.charAt(0)); // V

//charCodeAt()
var code = console.log(str.charCodeAt(0)); // 86

//concat()
var newStr = str.concat("How are you?"); // Vitthal Korvan!How are you?
console.log(newStr);

//endsWith()
var endsWith = str.endsWith("!"); // true
console.log(endsWith);

//indexOf()
var index = str.indexOf("World"); // 7
console.log(index);

// slice() -> ex :- slice(1,4) -> prints from 1 to 4 but not 4
var newStr = str.slice(0, 5); // Vitth
console.log(newStr);

//split()
var arr = str.split(" "); // ["Vitthal", "Korvan!"]
console.log(arr);

//toUpperCase()
var newStr = str.toUpperCase(); // VITTHAL KORVAN!
console.log(newStr);

// typeof operator :
// typeof -> returns the type of the variable

// data types (primitive data types)
// string "Vitthal"
// number 2, 4, 5.6
// booleans
// undefined
// null
// BigInt
// Symbol

let age = 22;
console.log(typeof age); //number

// convert number to string :

//  22 -> "22"
age = age + "";
console.log(typeof age); //string "22"

//  convert string to number :

let myStr = +"34";
console.log(typeof myStr); //number

let myAge = "18";
myAge = Number(myAge);
console.log(typeof myAge); //number

// string concatenation :

let string1 = "17";
let string2 = "10";

let newString = +string1 + +string2;
// +string is used to convert string to number
console.log(typeof newString);

// string template :
let myage = 24;
let myname = "Vitthal";

// "my name is Vitthal and my age is 24 "
// let aboutMe = "my name is " + myname + " and my age is " + myage;

let aboutMe = `my name is ${myname} and my age is ${myage}`;
console.log(aboutMe);

// undefined ->
let car; //no value provided to car so it's undefined
// null
let car1 = null; // no value provided to car1 so it's null
console.log(car1);

console.log(typeof firstName);
firstName = "Maheshwari";
console.log(typeof firstName, firstName);

let myVariable = null;
console.log(myVariable);
myVariable = "Vitthal";
console.log(myVariable, typeof myVariable);
console.log(typeof null);
// bug , error

// BigInt
let myNumber = BigInt(12);
let sameMyNumber = 123n; //another way of declaring the bigInt
console.log(myNumber);
console.log(myNumber + sameMyNumber);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(typeof myNumber);
console.log(typeof sameMyNumber);
