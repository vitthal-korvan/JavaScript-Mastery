//customizing an event

const btn = document.querySelector("button");

const myEvent = new Event("showAlert");

btn.addEventListener("showAlert", () => {
  alert("you clicked on wrong button");
  console.log("you never clicked a button");
});
btn.dispatchEvent(myEvent);
