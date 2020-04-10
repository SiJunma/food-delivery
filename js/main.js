const modal = document.querySelector('.modal-wrapper'),
      closeBtn = document.querySelectorAll('.close-btn'),
      cartBtn = document.getElementById('cart-btn');

const toggleModal = (evt) => {
    evt.preventDefault();
    modal.classList.toggle('show');
};

cartBtn.addEventListener('click', (evt) => {
    toggleModal(evt);
});

closeBtn.forEach(elem => {
    elem.addEventListener('click', (evt) => {
        toggleModal(evt);
    });
});

new WOW().init();