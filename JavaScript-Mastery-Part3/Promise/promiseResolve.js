//Promise Resolve

// const myPromise = Promise.resolve(5);
// myPromise.then(value=>{
//   console.log(value);
// })


// const myPromise = Promise.resolve(5);
// Promise.resolve(5).then(value=>{
//   console.log(value);
// })

// then()
// then method hamesha promise return karta hai


function myPromise() {
  return new Promise((resolve, reject) => {
    const variable = true
    if(!variable)resolve("foo");
    else reject('no foo')
  });
}

myPromise()
  .then((value) => {
    console.log(value);
    value += "bar";
    return value;
    //return Promise.resolve(value)
  })
  .then((value) => {
    console.log(value);
    value += "baaz";
    return value;
  })
  .then((value) => {
    console.log(value);
  })
  .catch(value=>{
    console.log(value);
  })