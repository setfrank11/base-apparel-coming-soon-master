const form = document.querySelector('.container__content__form');
const inputEmail = document.querySelector('container__content__form__email');
const error = document.querySelector('container__content__form__email--error');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    validateEmail(inputEmail.value);
});

function validateEmail(email){
    const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    
     if (regExp.test(email) == true) {
        
        inputEmail.style.border = '1px solid hsl(0, 36%, 70%)';
        inputEmail.style.backgroundImage = 'url("")';
     } else {
        inputEmail.style.border = '1px solid red';
        inputEmail.style.backgroundImage = 'url("./images/icon-error.svg")';
    }
};