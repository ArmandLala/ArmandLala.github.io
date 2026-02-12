const galleryRow = document.querySelector('.gallery-row');
const images = Array.from(document.querySelectorAll('.gallery-img'));
const prevBtn = document.getElementById('gallery-prev');
const nextBtn = document.getElementById('gallery-next');

let currentIndex = 0;
const visibleCount = 5;
let imgWidth = images[0].getBoundingClientRect().width + 12; // 12 = gap

function updateGallery() {
  const offset = currentIndex * imgWidth;
  galleryRow.style.transform = `translateX(-${offset}px)`;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) currentIndex--;
  updateGallery();
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < images.length - visibleCount) currentIndex++;
  updateGallery();
});

window.addEventListener('resize', () => {
  imgWidth = images[0].getBoundingClientRect().width + 12;
  updateGallery();
});

/* Popup (uguale al tuo) */
const popup = document.getElementById('img-popup');
const popupImg = document.getElementById('img-popup-big');
const popupPrev = document.getElementById('popup-prev');
const popupNext = document.getElementById('popup-next');

let currentPopupIndex = 0;

function showPopup(index) {
  if (index < 0 || index >= images.length) return;
  popupImg.src = images[index].src;
  popup.style.display = 'flex';
  currentPopupIndex = index;
}

images.forEach((img, idx) => {
  img.addEventListener('click', (e) => {
    e.stopPropagation();
    showPopup(idx);
  });
});

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
  showPopup((currentPopupIndex + images.length) % images.length);
});

document.addEventListener('keydown', (e) => {
  if (popup.style.display === 'flex') {
    if (e.key === 'ArrowLeft') showPopup((currentPopupIndex - 1 + images.length) % images.length);
    if (e.key === 'ArrowRight') showPopup((currentPopupIndex + images.length) % images.length);
    if (e.key === 'Escape') closePopup();
  }
});
