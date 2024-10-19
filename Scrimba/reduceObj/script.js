import shoppingCart from "./data.js";

/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

function total(arr) {
  const total = arr.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  return total.toFixed(2);
}

console.log(total(shoppingCart));



/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

function totalSavory(arr){
    return arr.reduce((acc, curr) => {
        // check if the current item has a type of "savory"
            // if yes, return acc += curr.price
        if(curr.type === "savory") return acc += curr.price;
            // if no, return acc
        return acc;
    }, 0);
}

console.log(totalSavory(shoppingCart));
