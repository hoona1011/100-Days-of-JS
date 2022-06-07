const hex = document.querySelector(".color");
const btn = document.querySelector(".generate");
const container = document.querySelector(".counter-div");

const generateColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  container.style.backgroundColor = "#" + randomColor;

  hex.innerHTML = "#" + randomColor;
  console.log("함수호출");

  setTimeout(() => {
    generateColor();
  }, 200);
};

btn.addEventListener("click", generateColor);

// let color = Math.random();
// color = Math.random().toString(16);
// color = Math.random().toString(16).substring(2, 8);

// console.log(color);
