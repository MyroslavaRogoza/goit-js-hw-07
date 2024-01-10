function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const numberInput = document.querySelector('input');
const box = document.querySelector('#boxes');
createBtn.addEventListener('click',onCreateBtnClick);
destroyBtn.addEventListener('click',destroyBoxes);

function onCreateBtnClick(){
if(numberInput.value>=1 && numberInput.value<=100){
  if(box.children){
    destroyBoxes();
  }
 let arrayOfElem=createBoxes(numberInput.value);
 box.append(...arrayOfElem);
}
numberInput.value='';
}

function destroyBoxes(){
  box.innerHTML='';
}

function createBoxes(amount){
  const array = [];
   let elWidth = 30;
   let elHeight = 30;
  
  for(let i=1;i<=amount;i++){
    const divEl = document.createElement('div');
    divEl.style.width = `${elWidth}px`;
    divEl.style.height = `${elHeight}px`;

    elWidth+=10;
    elHeight+=10;

    divEl.style.backgroundColor = getRandomHexColor();

    array.push(divEl);
    }
    return array;
  }