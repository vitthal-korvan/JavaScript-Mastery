// intro to events
// click

//const btn = document.querySelector(".btn-headline");
// method --- addEventListener
// function clickMe(){
//     console.log("you clicked me !!!!!");
// }

// btn.addEventListener("click", function(){
//     console.log("you clicked me !!!!");
// });

// btn.addEventListener("click", ()=>{
//     console.log("arrow function !!!")
// });

// this keyword :
//const btn = document.querySelector(".btn-headline");
// for normal function this keyword is Element.
// for arrow function this keyword is window object.
// btn.addEventListener("click",function(){
//     console.log("you clicked me !!!!");
//     console.log("value of this")
//     console.log(this);
// });

// keypress event
// mouseover event
// const body = document.body;

// body.addEventListener("keypress", (e) => {
//   console.log(e.key);
// });
// const mainButton = document.querySelector(".btn-headline");
// console.log(mainButton);
// mainButton.addEventListener("mouseover", () => {
//   console.log("mouseover event ocurred!!!");
// });

// mainButton.addEventListener("mouseleave", () => {
//   console.log("mouseleave event ocurred!!!");
// });

const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
  newLi.innerHTML = newLiInnerHtml;
  todoList.append(newLi);
  todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
  // check if user clicked on done button
  if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
});
