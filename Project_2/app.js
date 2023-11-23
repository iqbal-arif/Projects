const gallerySection = document.querySelector('.gallery');
console.log(gallerySection);
// const galleryImage = document.querySelector('.gallery');
// console.log(galleryImage.children);
const imageContainer = document.querySelectorAll('.img-container').src;
console.log(imageContainer);
const galleryModal = document.querySelector('.modal');
// console.log(galleryModal);
const fullImage = document.querySelector('.full-img');
console.log(fullImage.alt);

// for (const img of imageContainer) {
//   img.addEventListener('click', (e) => {
//     console.log(img.src);
//   });
// }

gallerySection.addEventListener('click', () => {
  console.log(imageContainer);
  //   for (const img of gallerySection) {
  //   }
});
//   console.log(e.value);
//   galleryModal.classList.add('.modal.open');
// });
