const links = document.querySelectorAll(".nav-list li a");

// for (link of links) {   //여기서의 this는 link
//   link.addEventListener("click", smoothScroll);
// }

for (link of links) {
  // 여기서의 this는 전역객체..?
  link.addEventListener("click", (e) => smoothScroll(e, 1)); // 암묵적으로 첫번째 인수로는 이벤트 객체
}

function smoothScroll(e, x) {
  e.preventDefault();
  console.log("이벤트 객체", e);
  // console.log("x의 값", x);

  console.log("this의 값", this);
  const href = this.getAttribute("href"); // 일반함수는 호출되는 곳에서 this가 결정됨
  console.log("href의 값", href);

  // 속성을 선택해서 .scrollIntoView
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}
