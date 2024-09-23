const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");

setTimeout(() => {
  one.style.color = "red";
  setTimeout(() => {
    two.style.color = "orange";
    setTimeout(() => {
      three.style.color = "pink";
      setTimeout(() => {
        four.style.color = "brown";
        setTimeout(() => {
          five.style.color = "green";
          setTimeout(() => {
            six.style.color = "yellow";
            setTimeout(() => {
              seven.style.color = "gray";
              setTimeout(() => {
                eight.style.color = "purple";
              }, 2000);
            }, 1000);
          }, 3000);
        }, 2000);
      }, 1000);
    }, 3000);
  }, 2000);
}, 1000);
