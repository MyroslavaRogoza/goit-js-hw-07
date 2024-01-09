function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');
const text = document.querySelector('.color');
changeColorBtn.addEventListener('click',onChangeColorBtnClick);

function onChangeColorBtnClick(){
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  text.textContent = color;
}
