// http://api.icndb.com/jokes/random

const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");
const url = "http://api.icndb.com/jokes/random";
// 원본 = http://api.icndb.com/jokes/random
btn.addEventListener("click", getJoke);

async function getJoke() {

  try {
    const X = null;
    X.map(x=> x*2);
    const response = await fetch(url);
    const data = await response.json();
    joke.innerHTML = data.value.joke;
    console.log('response',response);
    
    console.log('데이터',data);
  } catch (error) { // fetch는 400, 500번대 에러를 못잡아내서 따로 처리해줘야한다
    console.log('에러 객체',error);
    joke.innerHTML = error.message;
  }
}
