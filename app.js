const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

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
  // console.log(event);
  const x = event.offsetX;
  const y = event.offsetY;
  // console.log(x, y);

  if (!painting) {
    // 클릭하고 움직이면 더이상 실행되지 않음
    ctx.beginPath(); // 클락하지 않고 떠다님(클릭하기를 기다림) 선의 시작점을 만들기 위함
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y); //path의 마지막 점에 연결 그래서 path가 먼저 만들어 져야됨
    ctx.stroke();
  }
}

function onMouseDown(event) {
  // console.log(event);    마우스를 클릭할 때 출력됨
  painting = true;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
