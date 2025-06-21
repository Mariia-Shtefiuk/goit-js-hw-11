import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const input = form.querySelector('input[name="search-text"]').value.trim();
  if (input === '') {
    iziToast.error({
      title: 'Error',
      message: 'Поле не повинно бути порожнім',
      position: 'topRight',
    });
    return;
  }
}
