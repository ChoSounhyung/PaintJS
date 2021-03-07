const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  // 마우스를 움직이는 내내 작동
  // console.log(event);
  const x = event.offsetX;
  const y = event.offsetY;
  // console.log(x, y);

  if (!painting) {
    // console.log("creating path in", x, y);
    // 클릭하고 움직이면 더이상 실행되지 않음
    ctx.beginPath(); // 클락하지 않고 떠다님(클릭하기를 기다림) 선의 시작점을 만들기 위함
    ctx.moveTo(x, y);
  } else {
    // console.log("creating line in", x, y);
    ctx.lineTo(x, y); //path의 마지막 점에 연결 그래서 path가 먼저 만들어 져야됨
    ctx.stroke();
  }
}

function handleColorClick(event) {
  // console.log(event.target.style);
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color; // override
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

// Array.from 이라는 array constructor로부터 method 호출(object로부터 array를 만들어)
// console.log(Array.from(colors));
