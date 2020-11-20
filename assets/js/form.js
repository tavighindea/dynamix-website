const form = document.getElementById('form');
const name = document.getElementById('name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');

form.addEventListener('submit', function(elem) {
    elem.preventDefault();

    if (checkInputs() === true) {
        alert('Te vom contacta in curand pentru sedinta ta de proba GRATUITA!');
    }
})

function checkInputs() {
    //get values from the inputs
    const nameValue = name.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();

    if (nameValue === '' || (typeof nameValue) !== 'string' || !isName(nameValue)) {
        alert('Te rugam sa introduci un Nume valid');
        return false;
    }
    if (lastNameValue === '' || (typeof lastNameValue) !== 'string' || !isName(lastNameValue)) {
        alert('Te rugam sa introduci un Prenume valid');
        return false;
    }
    if (emailValue === '') {
        alert('Campul pentru email nu poate fi gol!');
        return false;
    }
    if (!isEmail(emailValue)) {
        alert('Email-ul introdus nu este corect!');
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