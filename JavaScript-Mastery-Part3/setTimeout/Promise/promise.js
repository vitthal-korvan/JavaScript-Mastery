// Promise -> it represents the value of the future
//A promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. It is used for handling asynchronous operations, such as making API calls or reading files, in a more organized and readable way.

//resolve
// If the resolve function is called first, the promise may become fulfilled, pending, or rejected.

// reject
// If the reject function is called first, the promise is immediately rejected.
// The promise's state determines which handler is called when then is used:

// Fulfilled
// If the promise is fulfilled, the fulfillment handler is called with the fulfillment value.

// Rejected
// If the promise is rejected, the rejection handler is called with the rejection reason.

/* ------- produce --------*/
console.log("script start");

setTimeout(() => {
  console.log("hello from setTimeout");
}, 0);

const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  ) {
    resolve({ value: "friedrice" });
  } else {
    reject("could not do it");
  }
});``


/* -------  Consume --------*/

//how to consume



friedRicePromise
  .then(
    // jab promise resolve hoga
    (myfriedRice) => {
      console.log("lets eat ", myfriedRice);
    }
  )
  .catch((error) => {
    console.log(error);
  });



for (let i = 0; i <= 100; i++) {
  console.log(Math.floor(Math.random(), i));
}

console.log("script end!!!!");