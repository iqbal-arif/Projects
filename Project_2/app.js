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
    fullImage.classList.add('open');
    //Getting the image alt attribute dynamically
    const imgAttribute = img.getAttribute('alt');
    //Getting the src of each image dynamically
    fullImage.src = `./img/full/${imgAttribute}.jpg`;
  });
});

galleryModal.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    //Remove Modal window that contains Class Open
    galleryModal.classList.remove('open');
    // Remove Full Image Window that contains Class Open & animate
    fullImage.classList.remove('open');
  }
});
