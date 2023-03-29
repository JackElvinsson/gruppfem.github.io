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

    const nameFormat = /^[À-ú\w\s-]{2,50}$/;
    const emailFormat = /^(?=.{6,50}$)\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneFormat = /^[0-9()-]{10,50}$/;
    const addressFormat = /^[a-öA-Ö0-9\s-]{4,50}$/;
    const postalCodeFormat = /^\d{3}[ ]{1}\d{2}$/;
    const cityFormat = /^[À-ú\w\s-]{2,50}$/;

    if (!nameFormat.test(nameInput.value)) {
        console.log('Name no success');
    } else {
        console.log('Name success');
    }    

    if (!phoneFormat.test(phoneInput.value)) {
        console.log('Phone no success');
    } else {
        console.log('Phone success');
    }

    if (!emailFormat.test(emailInput.value)) {
        console.log('Email no success');
    } else {
        console.log('Email success');
    }    
            
    if ( !addressFormat.test(addressInput.value)) {
        console.log('Address no success');
    } else {
        console.log('Address success');
    } 
    
    if ( !postalCodeFormat.test(postalCodeInput.value)) {
        console.log('Postal code no success');
    } else {
        console.log('Postal code success');
    }
        
    if ( !cityFormat.test(cityInput.value)) {
        console.log('City no success');
    } else {
        console.log('City success');
    }     
}



