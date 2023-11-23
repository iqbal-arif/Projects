/******************** */
//Full image selector
const fullImage = document.querySelector('.full-img');
console.log(fullImage);
//Gallery section that has all the small images
// Selecting img Tag in class gallery
const imgGallery = document.querySelectorAll('.gallery img');
console.log(imgGallery);
//Modal to show large images
const galleryModal = document.querySelector('.modal');
console.log(galleryModal);

imgGallery.forEach((img) => {
  img.addEventListener('click', () => {
    galleryModal.classList.add('open');
  });
});
