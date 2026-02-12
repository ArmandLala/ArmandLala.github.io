const row = document.querySelector(".gallery-row");
const imgs = document.querySelectorAll(".gallery-img");
const prev = document.getElementById("gallery-prev");
const next = document.getElementById("gallery-next");

let index = 0;
const visible = 5;

function getImgWidth() {
  const style = getComputedStyle(row);
  const gap = parseFloat(style.gap);
  return imgs[0].offsetWidth + gap;
}

let imgWidth = getImgWidth();

function update() {
  row.style.transform = `translateX(-${index * imgWidth}px)`;
}

next.addEventListener("click", () => {
  if (index < imgs.length - visible) {
    index++;
    update();
  }
});

prev.addEventListener("click", () => {
  if (index > 0) {
    index--;
    update();
  }
});

window.addEventListener("resize", () => {
  imgWidth = getImgWidth();
  update();
});
