const galleryRow = document.querySelector('.gallery-row');
const prevBtn = document.getElementById('gallery-prev');
const nextBtn = document.getElementById('gallery-next');

function getScrollAmount() {
  const img = galleryRow.querySelector('.gallery-img');
  const style = getComputedStyle(img);
  const gap = parseInt(style.marginRight) || 12;
  return img.offsetWidth + gap;
}

prevBtn.addEventListener('click', () => {
  galleryRow.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  galleryRow.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
});
