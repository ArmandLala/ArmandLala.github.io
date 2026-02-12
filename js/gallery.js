const galleryRow = document.querySelector('.gallery-row');
const prevBtn = document.getElementById('gallery-prev');
const nextBtn = document.getElementById('gallery-next');

// Larghezza visibile di 5 immagini
const img = document.querySelector('.gallery-img');
const imgWidth = img.offsetWidth + 12; // + gap
const visibleCount = 5;

prevBtn.addEventListener('click', () => {
  galleryRow.scrollBy({ left: -imgWidth, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  galleryRow.scrollBy({ left: imgWidth, behavior: 'smooth' });
});
