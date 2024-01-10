const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(evt){
    evt.preventDefault();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if(email.length === 0 || password.length === 0){
        alert('All form fields must be filled in');
    } 
    else{       
    const userData = {
        email,
        password,  
    };
    console.log(userData);
    form.reset();
    }
}
