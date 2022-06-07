const word = document.querySelector(".input-text");
// const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const formEl = document.querySelector(".container");
const inputEl = document.querySelector(".input-text");

console.log(formEl);

inputEl.focus(); // 포커스 처음에 주고..

formEl.addEventListener("submit", countVowel);

function countVowel(e) {
  e.preventDefault(); // 새로고침 막고

  let vowelCount = 0;
  let wordVal = word.value.toLowerCase();

  for (let i = 0; i < wordVal.length; i += 1) {
    let letter = wordVal[i];
    // 정규...표현식?
    if (letter.match(/([a,e,i,o,u])/)) {
      vowelCount += 1; // 헤로피식
    }
  }
  result.innerHTML = `${word.value.toUpperCase()}은(는)  ${vowelCount}개의 모음을 포함하고 있습니다`;
  console.log("이벤트 객체: ", e);

  console.log(e.target[0].value); // formEl의 이벤트 객체를 열어보니 0번에 INPUT이 존재
  e.target[0].value = ""; // 인풋창 초기화
  e.target[0].focus(); // 인풋창 포커스
}
