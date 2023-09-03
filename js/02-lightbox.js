import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryElements = document.querySelector('.gallery');


const createGalleryMarkup = galleryItems => {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href=${original}>
                <img class="gallery__image" src=${preview} alt=${description} />
            </a>`;
    })
    .join('');
};

galleryElements.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
