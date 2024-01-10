const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
inputName.addEventListener('input', evt =>{
    const trimmedValue = evt.currentTarget.value.trim();
    if(trimmedValue === ''){
        outputName.textContent = "Anonymous";
    } else {
        outputName.textContent = evt.currentTarget.value;
    }
});

