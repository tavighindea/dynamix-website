const form = document.getElementById('form');
const testForm = document.querySelector("#contact-container-anchor form")
const formTitle = document.getElementById('contact-title')
const name = document.getElementById('name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const nameError = document.getElementsByClassName('name-error');
const lastNameError = document.getElementsByClassName('last-name-error');
const emailError = document.getElementsByClassName('email-error');


testForm.addEventListener('submit', function(elem) {
    elem.preventDefault();
    
    const formData = new formData(testForm);
    fetch(testForm.getAttribute('action'),{
    method: 'POST',
    headers: {
        'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: new URLSearchParams(formData).toString()
    })
    .then(function() {
        if (checkInputs() === true) {
            M.toast({
                html: 'Veți fi contactat/ă pentru o ședinta de probă GRATUITA!',
                classes: 'pulse'
            });
        }
    });
    
});

function checkInputs() {
    //get values from the inputs
    console.log('intra in functie');
    const nameValue = name.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();

    if (nameValue === '' || (typeof nameValue) !== 'string' || !isName(nameValue)) {
        nameError.style.display = 'block';
        return false;
    }
    if (lastNameValue === '' || (typeof lastNameValue) !== 'string' || !isName(lastNameValue)) {
        lastNameError.style.display = 'block';
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
