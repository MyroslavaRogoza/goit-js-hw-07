const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
inputName.addEventListener('input', evt =>{
    if(evt.currentTarget.value.trim() ==='' || evt.currentTarget.value.trim() ===' '){
        outputName.textContent === "Anonymous";
    } else {
        outputName.textContent = evt.currentTarget.value;
    }
});

