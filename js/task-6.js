function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const elemCount = document.querySelector('input');
const box = document.querySelector('#boxes');
createBtn.addEventListener('click',onCreateBtnClick);
destroyBtn.addEventListener('click',destroyBoxes);

function onCreateBtnClick(){
if(elemCount.value>=1 && elemCount.value<=100){
 let arrayOfElem=createBoxes(elemCount.value);
 box.append(...arrayOfElem);
}
elemCount.value='';
}

function destroyBoxes(){
  box.innerHTML='';
}

function createBoxes(amount){
const array=[];
let elWidth = 30;
let elHeight = 30;

for(let i=1;i<=amount;i++){
  const divEl = document.createElement('div');
  divEl.style.backgroundColor = getRandomHexColor();
  
  elWidth+=10;
  elHeight+=10;
  
  divEl.style.width = `${elWidth}px`;
  divEl.style.height = `${elHeight}px`;
  array.push(divEl);
  }
  return array;
}