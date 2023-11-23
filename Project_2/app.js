// const galleryImage = document.querySelector('.gallery');
// console.log(galleryImage.children);
const imageContainer = document.querySelectorAll('.img-container').src;
console.log(imageContainer);
/******************** */
//Full image selector
const fullImage = document.querySelector('.full-img');
console.log(fullImage);
//Gallery section that has all the small images
const smImgGallery = document.querySelectorAll('.gallery');
console.log(smImgGallery);
//Modal to show large images
const galleryModal = document.querySelector('.modal');
console.log(galleryModal);

smImgGallery.forEach((img) => {
  img.addEventListener('click', () => {
    galleryModal.classList.add('open');
  });
});
