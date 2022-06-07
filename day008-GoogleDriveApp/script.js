const gLink = document.getElementById("glink");
const btn = document.getElementById("btn");
const downloadLink = document.getElementById("download-link");
const embedAudio = document.getElementById("embed-audio");
const embedVideo = document.getElementById("embed-video");
const clear = document.querySelector(".clear");

btn.addEventListener("click", generateLink);

function generateLink(e) {
  e.preventDefault();
  // console.log(gLink.value);

  // PASTE 인풋창의 value
  const gLinkValue = document.getElementById("glink").value; // gLink.value랑 같음

  //include로 특정 요소 포함하고 있나 판별, 반환값 불린 데이터
  const confirmLink = glink.value.includes("https://drive.google.com/file/d/");

  if (confirmLink == true) {
    const getDownloadLink = gLink.value
      .replace(
        "https://drive.google.com/file/d/",
        "https://drive.google.com/uc?export=download&id="
      )
      .replace("/view?usp=sharing", "");
    // alert(getDownloadLink);
    downloadLink.value = getDownloadLink; // 다운로드 링크 textarea는 replace 처리된 값

    function copyText(target) {
      // 카피함수
      if (target.value == "") {
        alert("Please generate a Download Link"); // 공백이면 경고 주고
      } else {
        target.select();
        document.execCommand("copy"); // 카피하는 코드
        alert("Link has been copied to clipboard");
      }
    }
    //////////////////////////////////////////////////////////////
    const copy = document.querySelector(".copy");
    copy.addEventListener("click", () => {
      return copyText(downloadLink);
    });

    // EMBED AUDIO
    const audio1 = '<audio width="300" height="32" controls="controls" src="';
    const audio2 = '" type="audio/mp3"></audio>';

    console.log(downloadLink.value);
    embedAudio.value = `${audio1}${downloadLink.value}${audio2}`;
    // COPY AUDIO EMBED CODE
    const copyAudio = document.querySelector(".copy-audio");
    copyAudio.addEventListener("click", () => {
      return copyText(embedAudio);
    });

    // Embed Video
    const getVideoLink = gLink.value.replace("/view?usp=sharing", "");

    const video1 = '<iframe src="';
    const video2 = '/preview" width="560" height="315"></iframe>';

    embedVideo.value = `${video1}${getVideoLink}${video2}`;

    const copyVideo = document.querySelector(".copy-video");
    copyVideo.addEventListener("click", () => {
      return copyText(embedVideo);
    });
  } else {
    alert("Please Enter a Google Drive File Link");
  }
}

clear.addEventListener("click", clearForm);

function clearForm(e) {
  e.preventDefault();
  gLink.value = "";
  downloadLink.value = "";
  embedAudio.value = "";
  embedVideo.value = "";
}
