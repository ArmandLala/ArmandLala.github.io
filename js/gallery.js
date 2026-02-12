const row = document.querySelector(".gallery-row");
const prev = document.getElementById("gallery-prev");
const next = document.getElementById("gallery-next");

function getStep() {
  const img = row.querySelector(".gallery-img");
  const style = getComputedStyle(row);
  const gap = parseFloat(style.gap);
  return img.offsetWidth + gap;
}

// Funzione per scrollare con animazione
function scrollRow(direction) {
  row.scrollBy({
    left: direction * getStep(),
    behavior: "smooth"
  });
}

// Event listener sulle frecce
next.addEventListener("click", () => scrollRow(1));
prev.addEventListener("click", () => scrollRow(-1));

// Mostra/nascondi frecce in base alla posizione
function updateArrows() {
  const scrollLeft = row.scrollLeft;
  const maxScroll = row.scrollWidth - row.clientWidth;

  prev.style.display = scrollLeft > 0 ? 'flex' : 'none';
  next.style.display = scrollLeft < maxScroll - 1 ? 'flex' : 'none';
}

// Aggiorna le frecce mentre scrolli manualmente
row.addEventListener('scroll', updateArrows);
window.addEventListener('resize', updateArrows);

// Inizializza le frecce
updateArrows();
