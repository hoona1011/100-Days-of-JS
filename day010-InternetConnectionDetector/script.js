const image = document.getElementById("image"); //이미지 태그
const statusDisplay = document.getElementById("status"); // 상태 표시할 P 태그
const bgColor = document.getElementById("main"); // 배경컬러용 main 태그
const disconnectBtn = document.querySelector(".disconnect");
let isConnected = false;

function setColor() {
  bgColor.classList.add("online");
}
disconnectBtn.addEventListener("click", () => {
  isConnected = !isConnected;
  console.log("연결 상태 토글됨");
  if (isConnected) {
    disconnectBtn.innerText = "DISCONNECT THE INTERNET";
  } else {
    disconnectBtn.innerText = "CONNECT THE INTERNET!!!!!!!!!";
  }
});

async function connectionStatus() {
  try {
    const res = await fetch(
      `https://upload.${
        isConnected ? "" : "alsdkjaldkjalsdkjasldkh"
      }wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=` +
        new Date().getTime() // 시간을 문자열로 더해줌
    );
    image.src = "./images/online.png"; // 빈 이미지 태그에 이미지 소스 삽입
    setColor(); // 배경 태그에 클래스 추가해서 배경색 바꿔줌
    console.log("비동기 반환값", res);

    return res.status >= 200 && res.status < 300;
  } catch (error) {
    // 요청 반환값의 ok가 false로 바뀌어도 에러를 잡아내지는 못함
    // catch가 잡아낼 수 있는 에러에 한계가 있음
    console.log("에러로그", error);

    console.error("에러객체", error);
    statusDisplay.textContent = "OOPS!!! Your Internet Connection is Down.";
    image.src = "./images/offline.png";
    bgColor.classList.remove("online");
  }
}

// Monitor the connection
setInterval(async () => {
  const result = await connectionStatus(); // res.status >= 200 && res.status < 300;의 결과값
  if (result) {
    statusDisplay.textContent = "You're ONLINE!!! Connection looks good.";
    setColor();
  }
}, 2000); // 2초에 한번씩 모니터링

//   Check Connection When Page Loads
window.addEventListener("load", async (event) => {
  if (connectionStatus()) {
    statusDisplay.textContent = "Online";
  } else {
    statusDisplay.textContent = "OFFline";
  }
});
