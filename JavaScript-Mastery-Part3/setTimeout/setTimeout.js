//Set Timeout ID
const id2 = setTimeout(() => {
  console.log("Timeout 2");
}, 100);
console.log("Timeout 2", id2);

console.log("Script Starts");

const id = setTimeout(() => {
  console.log("Timeout 1");
}, 1000);

console.log("Timeout 1", id);

for (let i = 0; i < 100; i++) {
  console.log("inside for");
}

console.log("script end");


// const time = ()=>{
//   console.log('Hello!');
// }
// setTimeout(time,1000)