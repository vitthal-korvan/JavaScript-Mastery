const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");

setTimeout(() => {
  heading1.style.color = "red";
  setTimeout(() => {
    heading2.style.color = "orange";
    setTimeout(() => {
      heading3.style.color = "pink";
      setTimeout(() => {
        heading4.style.color = "brown";
        setTimeout(() => {
          heading5.style.color = "green";
          setTimeout(() => {
            heading6.style.color = "yellow";
            setTimeout(() => {
              heading7.style.color = "gray";
              setTimeout(() => {
                heading8.style.color = "purple";
              }, 2000);
            }, 1000);
          }, 3000);
        }, 2000);
      }, 1000);
    }, 3000);
  }, 2000);
}, 1000);
