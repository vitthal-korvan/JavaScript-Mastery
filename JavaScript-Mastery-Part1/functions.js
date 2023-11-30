function singHappyBirthday() {
      console.log("happy birthday to you ......");
    }
    
    singHappyBirthday();
    
    // function sumThreeNumbers(number1, number2, number3){
    //   return number1 + number2 + number3;
    // }
    
    // console.log(sumThreeNumbers(2,3,4));
    
    
    // isEven
    // input : 1 number 
    // output : true , false 
    
    function isEven(number) {
      return number % 2 === 0;
    }
    
    console.log(isEven(4));
    
    // function 
    // input : string 
    // output: firstCharacter 
    
    function firstChar(anyString) {
      return anyString[0];
    }
    
    console.log(firstChar("zbc"));
    
    // function 
    // input : array, target (number)
    // output: index of target if target present in array 
    
    function findTarget(array, target) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
          return i;
        }
      }
      return -1;
    }
    const myArray = [1, 3, 8, 90]
    const ans = findTarget(myArray, 8);
    const ans1 = findTarget(myArray, 9);
    console.log(ans, ans1);
    
    // function expression : the function expression is a function declaration wrapped in a variable.
    
    const sumThreeNumbers = function(number1, number2, number3) {
      return number1 + number2 + number3;
    }
    const sum = sumThreeNumbers(2, 3, 4);
    console.log(sum);
    
    // Arrow function :
    // Arrow function is a function expression wrapped in a variable.
    // Arrow function is a concise syntax for writing function expressions.
    
    // Arrow function with one parameter :
    const square = (number) => {
      return number * number;
    }
    console.log(square(5));
    
    //hoisting : 
    // hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
    const hoisting = () => {
      console.log(i);
      var i = 10;
    }
    hoisting();
    
    hello();// hoisting is only allowed for function declarations.
    
    function hello() {
      console.log("hello! Vitthal");
    }
    
    // functions inside function : 
    function app() {
      const myFunc = () => {
        console.log("hello from myFunc")
      }
    
      const addTwo = (num1, num2) => {
        return num1 + num2;
      }
    
      const mul = (num1, num2) => num1 * num2;
    
      console.log("inside app");
      myFunc();
      console.log(addTwo(2, 3));
      console.log(mul(2, 3));
    }
    app();
    
    //lexical scope : 
    // lexical scope is the scope of a variable defined inside a function.
    const myVar = "value1";
    
    function myApp(){
    
        function myFunc()
        {
          const myVar = "value59";
        
          const myFunc2 = () =>
          {
            console.log("inside myFunc", myVar);
          }
        
          myFunc2();
        }
    
        console.log(myVar);
        myFunc();
    }
    
    myApp();
    
    
    // block scope vs function scope : 
    // block scope is the scope of a variable defined inside a block.
    // function scope is the scope of a variable defined inside a function.
    
    
    // "let and const are block scope". 
    // "var is function scope" 
    
    if(true){
        var firstName = "Vitthal";
        console.log(firstName); // Vitthal
    }
    
    console.log(firstName); // Vitthal
    
    function myApp(){
        if(true){
            var firstName = "Vitthal";
            console.log(firstName);// Vitthal
        }
    
        if(true){
            console.log(firstName); // Vitthal
        }
        console.log(firstName); // Vitthal
    }
    
    myApp();
    
    //defaul parameters :
    // default parameters are parameters that are optional and have a default value.
    
    function add(num1 = 1, num2 = 1) {
      return num1 + num2;
    }
    
    console.log(add()); // 2
    console.log(add(5)); // 6
    console.log(add(5, 6)); // 11
    
    // rest parameters :
    // rest parameters are parameters that can accept any number of arguments.
    // rest parameters are used to unpack values from an array or to spread values out of an array.
    
    function sum1(...numbers) {
      let total = 0;
      for (let number of numbers) {
        total += number;
      }
      return total;
    }
    console.log(sum1(1, 2, 3, 4, 5)); // 15
    console.log(sum1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
    
    
    //param desturcture :
    // param desturcture is a syntax that allows us to extract values from an object or array and assign them to variables.
    
    const student = {
      name: "Vitthal",
      age: 24,
      gender: "male"
    }
    
    const {name, age, gender} = student;
    console.log(name, age, gender); // Vitthal 24 male
    
    
    function printDetails(obj){
        console.log(obj.name);// Vitthal
        console.log(obj.gender);// male
    }
    
    
    function printDetails({name, gender, age}){
      console.log(name);// Vitthal
      console.log(gender);// male
      console.log(age);// 24
    }
    
    printDetails(student); // Vitthal male 24
    
    
    //callback function : 
    
    function myFunc2(name){
        console.log("inside my func 2")
        console.log(`your name is ${name}`);
    }
    
    function myFunc(callback){
        console.log("hello there I am a func and I can..")
        callback("Vitthal");
    }
    
    myFunc(myFunc2);
    
    
    // function returning function : 
    // function returning function is a function that returns another function.
    // function returning function is used to encapsulate a piece of code that is meant to be executed later.
    
    function myFunc(){
      function hello(){
          return "hello world!"
      }
      return hello;
    }
    
    const ans3 = myFunc();
    console.log(ans3());