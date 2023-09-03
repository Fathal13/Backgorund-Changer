const circles = document.querySelectorAll(".circle");
let body = document.body;
let title = document.querySelector(".title");

circles.forEach((circle) => {
  circle.addEventListener("click", (style) => {
    const computedStyle = window.getComputedStyle(style.target);
    body.style.backgroundColor = computedStyle.backgroundColor
  });
});

const textChange = () => {
  title.style.color = "white"
}