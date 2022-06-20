const btn = document.querySelector(".get-quotes");
const number = document.getElementById("number");
const URL = "https://type.fit/api/quotes";
const quotesEl = document.querySelector(".quotes");

btn.addEventListener("click", getQuotes);

function getQuotes(e) {
  e.preventDefault();

  if (number.value.length == 0) {
    return alert("숫자를 입력해주세요");
  } else {
    fetch(URL)
      .then(function (response) {
        console.log(response);

        return response.json();
      })
      .then(function (data) {
        //셔플은 필요 이상의 연산을 하는 단점이 있음
        // shuffle(data);
        console.log("asd", data);

        let output = "";

        for (let i = 0; i < number.value; i += 1) {
          const randomNumber = Math.floor(Math.random() * data.length);
          output += `
                    <li>명언: ${data[randomNumber].text}</li>
                    <li>인물: ${data[randomNumber].author}</li>
                    <hr>
                    `;
        }
        quotesEl.innerHTML = output;

        return data;
      })
      .then((x) => {
        console.log(x);
      });
  }
}

//  FUNCTION TO SHUFFLE QUOTES

// function shuffle(quotes) {
//   let CI = quotes.length;
//   let tempValue;
//   let randomIndex;

//   // While elements exist in the array
//   while (CI > 0) {
//     randomIndex = Math.floor(Math.random() * CI);

//     console.log("한 번 섞었음");

//     // CI 1 감소
//     CI--;
//     // SWAP THE LAST ELEMENT WITH CI
//     tempValue = quotes[CI]; // 임시로 tempValue에 quotes[CI]값을 저장해놓고
//     quotes[CI] = quotes[randomIndex]; // randomIndex 인덱스에 해당하는 요소의 값을 quotes[CI]에 할당
//     quotes[randomIndex] = tempValue;
//     // 마치 저글링처럼 tempValue를 중간 저장소로 이용해서 quotes[CI]와 quotes[randomIndex]의 값을 교환해주는 역할
//   }
//   return quotes;
// }
