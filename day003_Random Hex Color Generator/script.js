const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");
const container = document.querySelector(".counter-div");

const generateColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  container.style.backgroundColor = "#" + randomColor;
  hex.innerHTML = "#" + randomColor;
  console.log("제너레이터 동작!");
};

btn.addEventListener("click", generateColor);

generateColor();

// let color = Math.random();
// color = Math.random().toString(16);
// color = Math.random().toString(16).substring(2, 8);

// console.log(color);
