const countEl = document.querySelector(".count");
// const addEl = document.querySelector(".add");
// const resetCountEl = document.querySelector(".reset");
// const subtractEl = document.querySelector(".subtract");
const buttonsEl = document.querySelector(".buttons");

let count = parseInt(countEl.textContent); //parseInt

buttonsEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count += 1;
  }
  if (e.target.classList.contains("subtract")) {
    count -= 1;
  }
  if (e.target.classList.contains("reset")) {
    count = 0;
  }
  countEl.textContent = count; // JS에서만이라도 숫자로 처리하자는 취지..
  setColor(); // 어차피 if문 이후에 실행될 것이므로 마지막에 작성
});

function setColor() {
  if (count > 0) {
    countEl.style.color = "orange";
  } else if (count < 0) {
    countEl.style.color = "red";
  } else {
    countEl.style.color = "white";
  }
  console.log(typeof count);
}
