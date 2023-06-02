const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');

let isDown = false;
let startX;
let scrollLeft;

cardContainer.addEventListener('mousedown', (e) => {
  isDown = true;
  cardContainer.classList.add('active');
  startX = e.pageX - cardContainer.offsetLeft;
  scrollLeft = cardContainer.scrollLeft;
});

cardContainer.addEventListener('mouseleave', () => {
  isDown = false;
  cardContainer.classList.remove('active');
});

cardContainer.addEventListener('mouseup', () => {
  isDown = false;
  cardContainer.classList.remove('active');
});

cardContainer.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - cardContainer.offsetLeft;
  const walk = (x - startX) * 3; // adjust scrolling speed here
  cardContainer.scrollLeft = scrollLeft - walk;
});

cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});
