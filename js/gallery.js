const row = document.querySelector(".gallery-row");
const prev = document.getElementById("gallery-prev");
const next = document.getElementById("gallery-next");

function getStep() {
  const img = row.querySelector(".gallery-img");
  const style = getComputedStyle(row);
  const gap = parseFloat(style.gap);
  return img.offsetWidth + gap;
}

next.addEventListener("click", () => {
  row.scrollBy({
    left: getStep(),
    behavior: "smooth"
  });
});

prev.addEventListener("click", () => {
  row.scrollBy({
    left: -getStep(),
    behavior: "smooth"
  });
});
