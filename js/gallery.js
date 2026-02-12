// =========================
// Gallery carosello 5 immagini
// =========================

// Seleziona elementi
const galleryRow = document.querySelector('.gallery-row');
const prevBtn = document.getElementById('gallery-prev');
const nextBtn = document.getElementById('gallery-next');
const galleryImages = Array.from(galleryRow.querySelectorAll('.gallery-img'));

// Calcola larghezza di scorrimento (larghezza immagine + gap)
function getScrollAmount() {
  const imgStyle = getComputedStyle(galleryImages[0]);
  const gap = parseInt(imgStyle.marginRight) || 12; // fallback 12px
  return galleryImages[0].offsetWidth + gap;
}

// Scorri indietro
prevBtn.addEventListener('click', () => {
  galleryRow.scrollBy({ left: -getScrollAmount() * 5, behavior: 'smooth' });
});

// Scorri avanti
nextBtn.addEventListener('click', () => {
  galleryRow.scrollBy({ left: getScrollAmount() * 5, behavior: 'smooth' });
});

// Optional: gestione tastiera per navigare la gallery con frecce
document.addEventListener('keydown', (e) => {
  if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
  if (e.key === 'ArrowLeft') {
    galleryRow.scrollBy({ left: -getScrollAmount() * 5, behavior: 'smooth' });
  } else if (e.key === 'ArrowRight') {
    galleryRow.scrollBy({ left: getScrollAmount() * 5, behavior: 'smooth' });
  }
});

// Optional: aggiornamento dinamico se ridimensioni finestra
window.addEventListener('resize', () => {
  // Forza ricalcolo se le immagini cambiano dimensione
  getScrollAmount();
});
