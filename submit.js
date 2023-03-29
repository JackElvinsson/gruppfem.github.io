const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const addressError = document.getElementById('address-error');
const postalCodeError = document.getElementById('postal-code-error');
const cityError = document.getElementById('city-error');
const submitError = document.getElementById('submit-error');

function validateName() {
    const name = document.getElementById('contact-name').value;
    if(name.length === 0) {
        nameError.innerHTML = 'Obligatoriskt';
        return false;
    }
    if(!name.match(/^[A-Za-zÀ-ú]*\s{1}[A-Za-zÀ-ú]+$/)) {
        nameError.innerHTML = 'Fyll i fullständigt namn';
        return false;
    }
    if(name.length > 50) {
        nameError.innerHTML = 'Max 50 tecken';
        return false;
    }
    nameError.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    return true;
}

function validatePhone() {
    const phone = document.getElementById('contact-phone').value;
    
    if(phone.length === 0) {
        phoneError.innerHTML = 'Obligatoriskt';
        return false;
    }
    if(phone.length < 10 || phone.length > 50) {
        phoneError.innerHTML = 'Antal tecken 10-50';
        return false;
    }
    if(!phone.match(/^[0-9()-]*$/)) {
        phoneError.innerHTML = 'Tillåtna tecken: 0-9, (), -';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    return true;
}

function validateEmail() {
    const email = document.getElementById('contact-email').value;
    
    if(email.length === 0) {
        emailError.innerHTML = 'Obligatoriskt';
        return false;
    }
    if(email.length > 50) {
        emailError.innerHTML = 'Max 50 tecken';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/)) {
        emailError.innerHTML = 'Ogiltig e-postadress';
        return false;
    }
    emailError.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    return true;
}

function validateAddress() {
    const address = document.getElementById('contact-address').value;

    if(address.length === 0) {
        addressError.innerHTML = 'Obligatoriskt';
        return false;
    }
    if(address.length < 4 || address.length > 50) {
        addressError.innerHTML = '4-50 tecken';
        return false;
    }
    if(!address.match(/^[a-öA-Ö0-9\s-]*$/)) {
        addressError.innerHTML = 'Ogiltig e-postadress';
        return false;
    }
    addressError.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    return true;
}

function validatePostalCode() {
    const postalCode = document.getElementById('contact-postal-code').value;

    if(postalCode.length === 0) {
        postalCodeError.innerHTML = 'Obligatoriskt';
        return false;
    }
    if(!postalCode.match(/^\d{3}[ ]{1}\d{2}$/)) {
        postalCodeError.innerHTML = 'Ogiltigt postnummer';
        return false;
    }
    postalCodeError.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    return true;
}

function validateCity() {
    const city = document.getElementById('contact-city').value;

    if(city.length === 0) {
        cityError.innerHTML = 'Obligatoriskt';
        return false;
    }
    if(city.length < 2 || city.length > 50) {
        cityError.innerHTML = '2-50 tecken';
        return false;
    }
    if(!city.match(/^[À-ú\w\s-]{2,50}$/)) {
        cityError.innerHTML = 'Ogiltigt ort';
        return false;
    }
    cityError.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    return true;
}

function validateForm() {
    if(!validateName() || !validatePhone() || !validateEmail() || validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fill out the form to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}