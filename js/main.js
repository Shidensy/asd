const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.nav__btn');
const btnOpenMobile = document.querySelector('.nav__btn-mobile');
const btnOpenInModal = document.querySelector('.nav__btn-modal');
const btnClose = document.getElementById("closeModal");



btnOpenModal.onclick = function () {
    btnOpenModal.classList.toggle('active');
    btnOpenInModal.classList.toggle('active');
    modal.classList.remove('none');
}

btnOpenInModal.onclick = function () {
    btnOpenModal.classList.toggle('active');
    btnOpenInModal.classList.toggle('active');
    modal.classList.add('none');
}

btnOpenMobile.onclick = function () {
    modal.classList.remove('none');
}

btnClose.onclick = function () {
    modal.classList.add('none');
}

window.onclick = function (event) {
    if (event.target == modal)
        modal.style.display = "none"
}