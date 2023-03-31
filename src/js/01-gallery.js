// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const imagesEl = document.querySelector('ul.gallery');
imagesEl.style.listStyle = 'none';

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
            <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
            </li>
        `
    )
    .join('');
}

const addGalleryMarkyp = createGalleryMarkup(galleryItems);

imagesEl.innerHTML = addGalleryMarkyp;

imagesEl.addEventListener('click', onGalleryItemClick);
let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function onGalleryItemClick(evt) {
  blockStandartAction(evt);

  const isGalleryItemEl = evt.target.classList.contains('gallery__image');
  if (!isGalleryItemEl) {
    return;
  }

  console.log(evt.target);

  gallery.open(isGalleryItemEl);
}

function blockStandartAction(evt) {
  evt.preventDefault();
}
