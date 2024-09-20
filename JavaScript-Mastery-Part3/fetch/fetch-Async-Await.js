/*
async: This keyword is used to define a function that works with asynchronous tasks (like fetching data). It tells JavaScript that this function will perform tasks that take some time, and the function will return a Promise.

await: This is used inside an async function. It tells JavaScript, "Wait here for the task to finish before moving to the next line of code." This is useful when you want to fetch data and use it only after it's fully loaded.
*/

// Define an async function
async function fetchData() {
  try {
    // Use 'await' to wait for the fetch request to complete
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    
    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Convert the response to JSON format
    let data = await response.json();
    
    // Log the data to the console
    console.log('Data:', data);
  } catch (error) {
    // Catch and handle any errors during the fetch
    console.error('Error fetching data:', error);
  }
}

// Call the async function
fetchData();
