const row = document.querySelector(".gallery-row");
const prev = document.getElementById("gallery-prev");
const next = document.getElementById("gallery-next");

function getStep() {
  const img = row.querySelector(".gallery-img");
  const style = getComputedStyle(row);
  const gap = parseFloat(style.gap);
  return img.offsetWidth + gap;
}

function scrollRow(direction) {
  row.scrollBy({
    left: direction * getStep(),
    behavior: "smooth"
  });
}

// Event listener frecce
next.addEventListener("click", () => scrollRow(1));
prev.addEventListener("click", () => scrollRow(-1));

// Funzione per mostrare/nascondere frecce
function updateArrows() {
  const scrollLeft = Math.round(row.scrollLeft);
  const maxScroll = row.scrollWidth - row.clientWidth;

  // Un piccolo margine per evitare problemi con frazioni di pixel
  const epsilon = 2; 

  prev.style.display = scrollLeft > epsilon ? 'flex' : 'none';
  next.style.display = scrollLeft < maxScroll - epsilon ? 'flex' : 'none';
}

// Aggiornamento continuo
row.addEventListener('scroll', updateArrows);
window.addEventListener('resize', updateArrows);

// Inizializza frecce
updateArrows();
