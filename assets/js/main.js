function openModal(id) {
    const modal = document.getElementById('modal-servicii');
    const modalContent = document.getElementById(id);
    
    

    modal.classList.remove('closed');
    modal.classList.add('open');

    modalContent.classList.remove('closed');
    modalContent.classList.add('open');
    

}

function closeModal()  {
    const modal = document.getElementById('modal-servicii');
    const modalContents = document.getElementsByClassName('modal-content');


    modal.classList.remove('open');
    modal.classList.add('closed');

    for (let i = 0; i<modalContents.length; i++) {
        modalContents[i].classList.remove('open');
        modalContents[i].classList.add('closed');
    }
}