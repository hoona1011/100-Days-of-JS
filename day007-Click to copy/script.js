const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = (e) => {
  e.preventDefault();

  coupon.select();
  coupon.setSelectionRange(0, 999999);
  document.execCommand("copy");

  btn.textContent = "Copied!!!";
  setTimeout(() => {
    btn.textContent = "Copy";
  }, 2000);
};

btn.addEventListener("click", copyText);
