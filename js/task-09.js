const refs = {
  buttonEl: document.querySelector('.change-color'),
  spanColor: document.querySelector('.color'),
};

refs.buttonEl.addEventListener('click', onChangeColor);

function onChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.spanColor.textContent = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
