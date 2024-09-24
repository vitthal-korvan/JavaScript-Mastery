sessionStorage.setItem("username", "Vitthal");
let username = sessionStorage.getItem('username'); // Returns 'Vitthal'
sessionStorage.removeItem("username");
sessionStorage.clear();
let length = sessionStorage.length;
let firstKey = sessionStorage.key(0);
