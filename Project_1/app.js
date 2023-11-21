const openModal = document.querySelector('.open');
const closeModal = document.querySelector('.modal-btn');
const modalContainer = document.querySelector('.modal-container');

openModal.addEventListener('click', () => {
  modalContainer.classList.add('show');
  console.log('clicked');
});

closeModal.addEventListener('click', () => {
  modalContainer.classList.remove('show');
});
