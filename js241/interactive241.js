const colorChangerButton = document.getElementById('colorChangerButton');
colorChangerButton.addEventListener('click', () => {
  const randomColor = getRandomColor();
  const heading = document.querySelector('h1');
  heading.style.color = randomColor;
  const headings = document.querySelector('h3');
  headings.style.color = randomColor;
});
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}


