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

//document.getElementById('order-form').addEventListener('submit', validateForm);
document.getElementById('order-form').addEventListener('submit', submitOrder);


function submitOrder(event) {
    event.preventDefault();

    if (!validateForm()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Vänligen fyll i alla fält';
        setTimeout(function () {
            submitError.style.display = 'none';
        }, 3000);
        return;
    }

    var userInfo = {
        name: document.getElementById('contact-name').value,
        phone: document.getElementById('contact-phone').value,
        email: document.getElementById('contact-email').value,
        address: document.getElementById('contact-address').value,
        postalCode: document.getElementById('contact-postal-code').value,
        city: document.getElementById('contact-city').value
    };

    // Clear the existing item information and image
    var orderContainer = document.querySelector('.order-container');
    orderContainer.innerHTML = '';

    // Simulerat serversvar. Triggar displayConfirmation
    setTimeout(function() {
        displayConfirmation(userInfo);
    }, 1000);
}


function validateForm() {
    return (
        validateName() &&
        validatePhone() &&
        validateEmail() &&
        validateAddress() &&
        validatePostalCode() &&
        validateCity()
    );
}


function displayConfirmation(confirmation) {
    var orderContainer = document.querySelector('.order-container');
    var orderContainer2 = document.querySelector('.order-container2');
    var formContainer = document.getElementById('order-form');
    var submitButton = document.getElementById('form-submitbtn');

    // Hämtar item.
    const item = JSON.parse(localStorage.getItem('item'));

    // Ta bort gamla formen
        formContainer.style.display = 'none';

    // Container för bilden.
    var imageContainer = document.createElement('div');
    imageContainer.classList.add('product-image');

    let itemImage = document.createElement('img');
    itemImage.classList.add('confirmation-image');
    itemImage.src = item.image;
    imageContainer.appendChild(itemImage);

    // ny Div med orderdetaljer.
    var orderDetails = document.createElement('div');
    orderDetails.classList.add('order-info');
    orderDetails.innerHTML = `
      <h2>Tack för din beställning!</h2>
      <p>Orderdetaljer:</p>
      <ul>
        <li>Namn: ${confirmation.name}</li>
        <li>Telefon: ${confirmation.phone}</li>
        <li>E-post: ${confirmation.email}</li>
        <li>Adress: ${confirmation.address}</li>
        <li>Postnummer: ${confirmation.postalCode}</li>
        <li>Ort: ${confirmation.city}</li>
        <li>Produkt: ${item.title}</li>
        <li>Orderkostnad: $${item.price}</li>
      </ul>
    `;

    //Lägger till orderDetails och imageConteiner till orderContainer.
    orderContainer.appendChild(orderDetails);
    orderContainer2.appendChild(imageContainer);

    
    submitButton.disabled = true;
}


document.getElementById('order-form').addEventListener('submit', submitOrder);
