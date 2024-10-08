const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
console.log(xhr);
// step1
console.log(xhr.readyState);// 0
xhr.open("GET", URL);
console.log(xhr.readyState);// 1
xhr.onreadystatechange = function () {
  // console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    console.log(xhr);
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(typeof data);
  }
};

xhr.onload = function () {
  const response = xhr.response;
  const data = JSON.parse(response);
  console.log(data);
};

xhr.send();
