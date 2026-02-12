const galleryRow = document.querySelector('.gallery-row');
const images = Array.from(document.querySelectorAll('.gallery-img'));
const prevBtn = document.getElementById('gallery-prev');
const nextBtn = document.getElementById('gallery-next');

let currentIndex = 0;
const visibleCount = 5; // quante immagini si vedono
const gap = 12; // gap CSS
let imgWidth = images[0].offsetWidth + gap; // larghezza immagine calcolata

// Funzione per aggiornare la posizione del carousel
function updateGallery() {
  galleryRow.scrollTo({
    left: currentIndex * imgWidth,
    behavior: 'smooth'
  });
}

// Event listener freccia sinistra
prevBtn.addEventListener('click', () => {
  if(currentIndex > 0) currentIndex--;
  updateGallery();
});

// Event listener freccia destra
nextBtn.addEventListener('click', () => {
  if(currentIndex < images.length - visibleCount) currentIndex++;
  updateGallery();
});

// Ricalcola larghezza immagini al resize
window.addEventListener('resize', () => {
  imgWidth = images[0].offsetWidth + gap;
  updateGallery();
});

// Popup immagini (già presente nel tuo HTML)
function showPopup(index) {
  const popup = document.getElementById('img-popup');
  const popupImg = document.getElementById('img-popup-big');
  if(index < 0 || index >= images.length) return;
  popupImg.src = images[index].src;
  popup.style.display = 'flex';
  currentPopupIndex = index;
}

images.forEach((img, idx) => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', (e) => {
    e.stopPropagation();
    showPopup(idx);
  });
});

// Popup navigazione
let currentPopupIndex = 0;
const popup = document.getElementById('img-popup');
const popupPrev = document.getElementById('popup-prev');
const popupNext = document.getElementById('popup-next');

function closePopup() {
  popup.style.display = 'none';
}

popup.addEventListener('click', closePopup);
popupPrev.addEventListener('click', (e) => {
  e.stopPropagation();
  showPopup((currentPopupIndex - 1 + images.length) % images.length);
});
popupNext.addEventListener('click', (e) => {
  e.stopPropagation();
  showPopup((currentPopupIndex + 1) % images.length);
});

// Keyboard navigation popup
document.addEventListener('keydown', (e) => {
  if(popup.style.display === 'flex') {
    if(e.key === 'ArrowLeft') showPopup((currentPopupIndex - 1 + images.length) % images.length);
    if(e.key === 'ArrowRight') showPopup((currentPopupIndex + 1) % images.length);
    if(e.key === 'Escape') closePopup();
  }
});
