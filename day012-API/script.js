const userLocation = document.querySelector(".location");
const btn = document.querySelector(".btn");

btn.addEventListener(
  "click",
  () => {
    navigator.geolocation.getCurrentPosition(showPosition);
  },
  { once: true }
);

function showPosition(position) {
  console.log("GeolocationPosition 객체를 조회", position);

  const locationContents = document.createElement("div");

  locationContents.innerHTML = `
        <hr>
        위도: ${position.coords.latitude} <br>
        경도: ${position.coords.longitude}
    `;
  // console.log(locationContents);

  userLocation.append(locationContents);
}

//navigator.geolocation.getCurrentPosition(success, error, [options])
//success
// GeolocationPosition 객체를 유일한 매개변수로 받는 콜백 함수
