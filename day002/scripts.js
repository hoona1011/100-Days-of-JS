const numberEl = document.querySelector(".number");
const generateBtn = document.querySelector(".generate");

const generateNumber = () => {
  // Generate number between 1 and 100
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  numberEl.innerHTML = randomNumber;
};

generateBtn.addEventListener("click", generateNumber);

generateNumber();
