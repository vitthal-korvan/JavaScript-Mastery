//Example 1: Passing a Function as an Argument

// function greet(name) {
//   return `Hello, ${name}!`;
// }

// function processUserInput(callback) {
//   const name = "John";
//   console.log(callback(name)); // Calling the passed-in function
// }

// processUserInput(greet);

// Example 2: Returning a Function

function multiplier(factor) {
  console.log(factor); //2
  return function (number) {
    console.log(number); //5
    return number * factor;
  };
}
const timesTwo = multiplier(2); // Returns a new function
console.log(timesTwo(5)); // Output: 10
