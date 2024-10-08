sessionStorage.setItem("username", "Vitthal");
let username = sessionStorage.getItem('username'); // Returns 'Vitthal'
 //sessionStorage.removeItem("username");
// sessionStorage.clear();
console.log(username);
let length = sessionStorage.length;
console.log(length);

let firstKey = sessionStorage.key(0);
console.log(firstKey);
