// nested if else

// winning number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 

let winningNumber = 19;
// prompt takes string as input so we have to convert it to number
let userGuess = +prompt("Guess a number");

if(userGuess === winningNumber){
    console.log("Your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }
}