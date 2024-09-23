// understand callback
// const h1 = document.querySelector("h1");
// const btn = document.querySelector("button");

// const world = ()=>{
//   h1.textContent = "world";
// }

// function world(){
//   h1.textContent = "world";
// }

// btn.addEventListener("click", world);

//function add(num1, num2){
//   let sum = num1 + num2
//   console.log(sum);
// }

// add(28,38)

// const timer = () => {
//   console.log("1 sec is completed");
// };
// setTimeout(timer, 1000);

// const myFunc2 = (callback2)=>{
//   console.log('MyFunc 2 is running');
//   callback2()
// }

// myFunc2(()=>{
//   console.log('callback2 is running');

// })

// function myFunc(callback) {
//   console.log("Function is doing task 1 ");
//   callback();
// }

// myFunc(() => {
//   console.log("function is doing task 2");
// });

//virat is parameter
// const anushka=(shweta)=>{
//   console.log('Hi! Anushka here');
//   shweta()
// }

// //()=>{} is argument
// anushka(virat =()=>{
//   console.log('Hi! Virat is here');
// })

// const addNumbers = (n1,n2)=>{
//   let sum = n1+n2
//   console.log(sum);
// }

// let num1 = 4
// let num2 = 3

// addNumbers(num1,num2)

function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    onSuccess(number1, number2);
  } else {
    onFailure();
  }
}

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

function onFail() {
  console.log("Wrong data type");
  console.log("please pass numbers only");
}
getTwoNumbersAndAdd(4, 4, addTwoNumbers, onFail);
