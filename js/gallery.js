const row = document.querySelector(".gallery-row");
const prev = document.getElementById("gallery-prev");
const next = document.getElementById("gallery-next");
const imgs = Array.from(row.children);

function getStep() {
  const img = row.querySelector(".gallery-img");
  const style = getComputedStyle(row);
  const gap = parseFloat(style.gap);
  return img.offsetWidth + gap;
}

// Scorrimento frecce
next.addEventListener("click", () => {
  row.scrollBy({ left: getStep(), behavior: "smooth" });
});
prev.addEventListener("click", () => {
  row.scrollBy({ left: -getStep(), behavior: "smooth" });
});

// Intersection Observer aggiornato
let observerOptions = {
  root: row,
  threshold: 0.95  // <- l'immagine deve essere quasi completamente visibile
};

const firstImg = imgs[0];
const lastImg = imgs[imgs.length - 1];

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.target === firstImg) {
      prev.style.opacity = entry.isIntersecting ? 0 : 1;
      prev.style.pointerEvents = entry.isIntersecting ? "none" : "auto";
    }
    if(entry.target === lastImg) {
      next.style.opacity = entry.isIntersecting ? 0 : 1;
      next.style.pointerEvents = entry.isIntersecting ? "none" : "auto";
    }
  });
}, observerOptions);

observer.observe(firstImg);
observer.observe(lastImg);
