//Set Timeout ID

console.log("Script Starts");
const id = setTimeout(() => {
  console.log("Inside SetTimeout");
}, 100);

console.log(id);

for (let i = 0; i < 100; i++) {
  console.log("inside for");
}

clearTimeout(id)
console.log("script end");


