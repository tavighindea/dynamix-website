const form = document.getElementById('form');
const testForm = document.querySelector("#contact-container-anchor form")
const formTitle = document.getElementById('contact-title')
const name = document.getElementById('name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const nameError = document.getElementsByClassName('name-error inactive');
const lastNameError = document.getElementsByClassName('last-name-error inactive');
const emailError = document.getElementsByClassName('email-error inactive');


testForm.addEventListener('submit', function(elem) {
    elem.preventDefault();
    
    const formData = new FormData(testForm);
    fetch(testForm.getAttribute('action'),{
    method: 'POST',
    headers: {
        'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: new URLSearchParams(formData).toString()
    })
    .then(function() {
        /* if (checkInputs() === true) {
            M.toast({
                html: 'Veți fi contactat/ă pentru o ședinta de probă GRATUITA!',
                classes: 'pulse'
            });
        }
        else {
            M.toast({
                html: ' ceva ii gresit',
                classes: 'pulse'
            })
        }
    }); */
    console.log('intra in functie');
    const nameValue = name.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();

    if (nameValue === '' || (typeof nameValue) !== 'string' || !isName(nameValue)) {
        nameError.classList.remove('inactive');
        nameError.classList.add('active');
        M.toast({
            html: 'Numele nu este corect!',
            classes: 'pulse'
        });
    }else {
        M.toast({
            html: 'Veți fi contactat/ă pentru o ședinta de probă GRATUITA!',
            classes: 'pulse'
        });
    }
    if (lastNameValue === '' || (typeof lastNameValue) !== 'string' || !isName(lastNameValue)) {
        lastNameError.classList.remove('inactive');
        lastNameError.classList.add('active');
        M.toast({
            html: 'Prenumele nu este corect!',
            classes: 'pulse'
        });
    }else {
        M.toast({
            html: 'Veți fi contactat/ă pentru o ședinta de probă GRATUITA!',
            classes: 'pulse'
        });
    }
    if (emailValue === '') {
        emailError.classList.remove('inactive');
        emailError.classList.add('active');
        M.toast({
            html: 'Campul de email este gol!',
            classes: 'pulse'
        });
    }else {
        M.toast({
            html: 'Veți fi contactat/ă pentru o ședinta de probă GRATUITA!',
            classes: 'pulse'
        });
    }
    if (!isEmail(emailValue)) {
        emailError.classList.remove('inactive');
        emailError.classList.add('active');
        M.toast({
            html: 'Campul de email este incorect!',
            classes: 'pulse'
        });
    }else {
        M.toast({
            html: 'Veți fi contactat/ă pentru o ședinta de probă GRATUITA!',
            classes: 'pulse'
        });
    }
    return true;
    
});

/* function checkInputs() {
    //get values from the inputs
    console.log('intra in functie');
    const nameValue = name.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();

    if (nameValue === '' || (typeof nameValue) !== 'string' || !isName(nameValue)) {
        nameError.classList.remove('inactive');
        nameError.classList.add('active');
        return false;
    }
    if (lastNameValue === '' || (typeof lastNameValue) !== 'string' || !isName(lastNameValue)) {
        lastNameError.classList.remove('inactive');
        lastNameError.classList.add('active');
        return false;
    }
    if (emailValue === '') {
        emailError.classList.remove('inactive');
        emailError.classList.add('active');
        return false;
    }
    if (!isEmail(emailValue)) {
        emailError.classList.remove('inactive');
        emailError.classList.add('active');
        return false;
    }
    return true;
} */

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isName(name) {
    return /^[a-zA-Z]+$/.test(name);
}
