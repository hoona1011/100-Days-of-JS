// LOCAL STORAGE METHODS
// setItem(): Add key and value to localStorage
// getItem(): This is how you get items from localStorage
// removeItem(): Remove an item by key from localStorage
// clear(): Clear all localStorage
// key(): Passed a number to retrieve the key of a localStorage

// window.localStorage.setItem("key", "value");
localStorage.setItem("userName", '박지훈');
localStorage.setItem("password", JSON.stringify(1234));
localStorage.setItem("isLoggedIn", JSON.stringify(false));

// 같은 key로 setItem 하면 덮어쓰기가 됨
// localStorage.setItem("userName", '홍길동'); 

const clear = document.querySelector('.clear');
const id = document.querySelector('.id');
const password = document.querySelector('.password');
const loginBtn = document.querySelector('.login')

const localId = localStorage.getItem('userName')
const localPassword = localStorage.getItem('password')




// input과 onchange의 차이를 알아봅시다
id.addEventListener('input', (e)=>{
    console.log(e.target.value)
  })


loginBtn.addEventListener('click', validation)


function validation () {
  if(id.value === localId && password.value === localPassword) {
    alert('로그인 성공')
    
  }
  else{
    alert('아이디나 비밀번호를 다시 확인해주세요')
  }
}

// 로컬 스토리지 클리어

clear.addEventListener('click', clearLocal)

function clearLocal () {
  localStorage.clear()
}