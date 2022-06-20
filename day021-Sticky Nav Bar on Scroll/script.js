const links = document.querySelectorAll(".nav-list li a");

// for (link of links) {
//   //여기서의 this는 link
//   link.addEventListener("click", smoothScroll);
// }

function method() {
  console.log("method의 this", this);
}
for (const link of links) {
  // 여기서의 this는 전역객체..?
  link.addEventListener("click", function (event) {
    smoothScroll(event, 1);
  }); // 암묵적으로 첫번째 인수로는 이벤트 객체
}

function smoothScroll(e, x) {
  e.preventDefault();

  console.log("this의 값", this);
  const href = this.getAttribute("href"); // 일반함수는 호출되는 곳에서 this가 결정됨

  // 속성을 선택해서 .scrollIntoView
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}
// Sticky Header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0); // toggle의 두번째 인수가 조건
});
