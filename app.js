const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  // console.log(event);
  const x = event.offsetX;
  const y = event.offsetY;
  // console.log(x, y);
}

function onMouseDown(event) {
  // console.log(event);    마우스를 클릭 후 뗄 때 출력됨
  painting = true;
}

function onMouseUp(event) {
  stopPainting();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", stopPainting);
}
