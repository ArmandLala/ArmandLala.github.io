const row = document.querySelector(".gallery-row");
const prev = document.getElementById("gallery-prev");
const next = document.getElementById("gallery-next");

// Calcola quanto scrollare (larghezza immagine + gap)
function getStep() {
  const img = row.querySelector(".gallery-img");
  const style = getComputedStyle(row);
  const gap = parseFloat(style.gap);
  return img.offsetWidth + gap;
}

// Scroll a destra
next.addEventListener("click", () => {
  row.scrollBy({
    left: getStep(),
    behavior: "smooth"
  });
  // Aggiorna frecce dopo animazione
  setTimeout(updateArrows, 300);
});

// Scroll a sinistra
prev.addEventListener("click", () => {
  row.scrollBy({
    left: -getStep(),
    behavior: "smooth"
  });
  // Aggiorna frecce dopo animazione
  setTimeout(updateArrows, 300);
});

// Mostra/Nascondi frecce in base alla posizione
function updateArrows() {
  const scrollLeft = row.scrollLeft;
  const maxScroll = row.scrollWidth - row.clientWidth;

  prev.style.display = scrollLeft > 0 ? 'flex' : 'none';
  next.style.display = scrollLeft < maxScroll - 1 ? 'flex' : 'none';
}

// Aggiorna frecce quando scroll manuale
row.addEventListener('scroll', updateArrows);

// Inizializza le frecce all'apertura della pagina
updateArrows();
