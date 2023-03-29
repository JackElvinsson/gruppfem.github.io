const form = document.querySelector('.form-container');
const nameInput = document.getElementById('form-name');
const phoneInput = document.getElementById('form-phone');
const emailInput = document.getElementById('form-email');
const addressInput = document.getElementById('form-address')
const postalCodeInput = document.getElementById('form-postal-code');
const cityInput = document.getElementById('form-city');

form.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault();
}



