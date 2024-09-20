// const URL = "https://jsonplaceholder.typicode.com/posts";
// fetch(URL)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//syntax:
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json(); // This converts the response to JSON format
  })
  .then((data) => {
    console.log(data); // Do something with the data, like display it
  })
  .catch((error) => {
    console.error("Error:", error); // This runs if there is an error
  });


