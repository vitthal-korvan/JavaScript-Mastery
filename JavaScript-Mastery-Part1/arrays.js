// intro to arrays :

// Array is reference type
// ordered collection of items

let fruits = ["apple", "mango", "grapes"];
let numbers = [1, 2, 3, 4];
let mixed = [1, 2, 2.3, "string", null, undefined];
console.log(mixed);
console.log(numbers);
console.log(fruits[2]);
let obj = {}; // object literal
console.log(fruits);
fruits[1] = "banana";
console.log(fruits); // arrays are mutable
console.log(typeof fruits); // array is an object
console.log(typeof obj); // object
console.log(Array.isArray(fruits)); //true
console.log(Array.isArray(obj)); //false

// array indexing :

console.log(fruits.length);
console.log(fruits[fruits.length - 1]);
console.log(fruits[fruits.length]); // last element + 1
console.log(fruits[fruits.length + 1]); // last element + 2

// array push, pop, shift and unshift :

fruits = ["apple", "mango", "grapes"];
console.log(fruits);

// push -> add element at the end of the array
fruits.push("banana");
console.log(fruits);
// pop -> remove element from the end of the array
let poppedFruit = fruits.pop();
console.log(fruits);
console.log("popped fruits is", poppedFruit);

// unshift -> add element at the beginning of the array
fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits);

// shift -> remove element from the beginning of the array
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruits is ", removedFruit);

// primitve vs reference data types :
let num1 = 6;
let num2 = num1;
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);
num1++;
//in primitive type , value is copied , value not changable
//in reference type , value is reference , value can be changed
console.log("after incrementing num1");
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);

// reference types -> obj, arrays, functions :

let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
// when we push an element in array1 it is also pushed in array2.
console.log("array1", array1);
console.log("array2", array2);

// how to clone array ->

// how to concatenate two arrays :

let array3 = ["item1", "item2"];

// slice method -> slice is used to copy the array
let array = array3.slice(0).concat(["item3", "item4"]);
console.log("array", array);

// spread operator : spread operator is used to spread the elements of an array into a new array.
let oneMoreArray = ["item4", "item5"];
let array4 = [...array1, ...oneMoreArray].concat(["Vitthal"]);
array3.push("item3");
console.log(array3 === array4);
console.log(array3);
console.log(array4);

// for loop in array :

fruits = ["apple", "mango", "grapes", "banana"];

let fruits2 = [];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);

// use const for creating array : it is immutable , we can't change the array , we can't add or remove elements from the array but we can perform the array operations. like push, pop, shift, unshift, slice, splice, concat.

// heap memory ["apple", "mango"] 0x11

const fruit1 = ["apple", "mango"]; // 0x11
fruit1.push("banana");
console.log(fruit1);

// for of loop -> used to iterate over the elements of an array.
for (let fruit of fruit1) {
  console.log(fruit);
}

// for in loop -> used to iterate over the keys of an object.
for (let key in fruit1) {
  console.log(key);
}

// array destructing -> destructing an array
let [a, b] = fruit1;
console.log(a);
console.log(b);
