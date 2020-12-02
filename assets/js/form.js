const form = document.getElementById('form');
const formTitle = document.getElementById('contact-title')
const name = document.getElementById('name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const nameError = document.getElementsById('name-error');
const lastNameError = document.getElementsById('last-name-error');
const emailError = document.getElementsById('email-error');
const successMessage = document.getElementsById('success-message');

form.addEventListener('submit', function(elem) {
    elem.preventDefault();

    if (checkInputs() === true) {
        formTitle.remove();
        form.remove();
        successMessage.style.display('flex');
    }
})

function checkInputs() {
    name.preventDefault();
    lastName.preventDefault();
    email.preventDefault();
    //get values from the inputs
    const nameValue = name.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();

    if (nameValue === '' || (typeof nameValue) !== 'string' || !isName(nameValue)) {
        nameError.style.display = 'block';
        return false;
    }
    if (lastNameValue === '' || (typeof lastNameValue) !== 'string' || !isName(lastNameValue)) {
        lastNameError.style.display = 'block';;
        return false;
    }
    if (emailValue === '') {
        emailError.style.display = 'block';
        return false;
    }
    if (!isEmail(emailValue)) {
        emailError.style.display = 'block';
        return false;
    }
    return true;
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isName(name) {
    return /^[a-zA-Z]+$/.test(name);
}

