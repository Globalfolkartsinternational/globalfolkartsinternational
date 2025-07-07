
const track = document.querySelector('.slider-track');
const prevBtn = document.querySelector('.nav.prev');
const nextBtn = document.querySelector('.nav.next');

// Insert all photos dynamically
const photoCount = 30;
for (let i = 1; i <= photoCount; i++) {
  const img = document.createElement('img');
  img.src = `gallery/photo${i}.jpg`;
  img.alt = `Photo ${i}`;
  track.appendChild(img);
}

let position = 0;
const slideSize = 220; // width + margin
const maxScroll = slideSize * photoCount - 6 * slideSize;

function slide(direction) {
  position += direction * slideSize * 3;
  if (position < 0) position = 0;
  if (position > maxScroll) position = maxScroll;
  track.style.transform = `translateX(-${position}px)`;
}

prevBtn.addEventListener('click', () => slide(-1));
nextBtn.addEventListener('click', () => slide(1));

// Auto scroll
setInterval(() => slide(1), 4000);
