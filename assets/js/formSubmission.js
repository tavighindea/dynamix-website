import {checkInputs} from '/assets/js/form.js';

let contactForm = document.querySelector("#form form")

contactForm.addEventListener('submit', function(e){
  e.preventDefault();

  const formData = new formData(contactForm);
  fetch(contactForm.getAttribute('action'),{
    method: 'POST',
    headers: {
      'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: new URLSearchParams(formData).toString()
  })
  .then(function(res){
    if (res) {
      alert('worked');
    }
  });

});