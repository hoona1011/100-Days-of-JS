const count = document.querySelector(".count");
const input = document.querySelector("input");

input.addEventListener("keypress", () => {
  count.innerHTML = input.value.length;
});

// const changeObserver = () => {
//   console.log("옵저버 실행");

//   count.innerHTML = input.value.length;
// };
