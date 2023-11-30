// booleans & comparison operator

// booleans
// true, false

let num1 = 7;
let num2 = "7";

console.log(num1 < num2);

// == vs === -> loose equality vs strict equality
// == -> loose equality -> checks only value not type
// === -> strict equality -> checks value and type
console.log(num1 === num2);

// != vs !== -> loose inequality vs strict inequality

console.log(num1 !== num2);

// truthy and falsy values :

// falsy values :

// false
// ""
// null
// undefined
// 0
// NaN

//truly values :

// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// "hello", "world", "javascript"
// [], {}, function(){}

// if else condition :

let age = 17;

if (age >= 18) {
  console.log("User can play ddlc");
} else {
  console.log("User can play mario");
}

let num = 13;

if (num % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

let firstName = 0;

if (firstName) {
  console.log(firstName);
} else {
  console.log("firstName is kinda empty");
}

// ternary operator / conditional operator :

age = 3;
let drink = age >= 5 ? "coffee" : "milk";
console.log(drink);

// nested if else :

// winning number 19

// 19 your guess is right
// 17 too low
// 20 too high

let winningNumber = 19;
//let userGuess = prompt("Guess a number");

//prompt -> it takes input in string form
let userGuess = 10;

if (userGuess === winningNumber) {
  console.log("Your guess is right!!");
} else {
  if (userGuess < winningNumber) {
    console.log("too low !!!");
  } else {
    console.log("too high !!!");
  }
}

// if else if ladder :
let tempInDegree = 35;

if (tempInDegree < 0) {
  console.log("extremely cold outside");
} else if (tempInDegree < 16) {
  console.log("It is cold outside");
} else if (tempInDegree < 25) {
  console.log("wheather is okay ");
} else if (tempInDegree < 35) {
  console.log("lets go for swim");
} else if (tempInDegree < 45) {
  console.log("turn on AC");
} else {
  console.log("too hot!!");
}

// switch statement :

let day = 4;
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Day");
}

// while loop :

// dry -> don't repeat yourself
let i = 0; // 1 2 3 4

while (i <= 9) {
  console.log(i);
  i++;
}
console.log(`current value of i is ${i}`);

// for loop :

// print 0 to 9

for (let i = 0; i <= 9; i++) {
  console.log(i);
}
console.log(`current value of i is ${i}`);

// sum of numbers from 1 to 100
let total = 0;
num = 100;

for (let i = 1; i <= num; i++) {
  total = total + i;
}

console.log(total);

// break keywork : -> breaks out of the loop

// continue keyword : -> skips the current iteration

for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    continue;
  }
  console.log(i);
}

// do while loop : -> executes atleast once

i = 10;
do {
  console.log(i);
  i++;
} while (i <= 9);

console.log("value of i is ", i);
