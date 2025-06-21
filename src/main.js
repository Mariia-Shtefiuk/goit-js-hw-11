import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  const q = form.querySelector('input[name="search-text"]').value.trim();
  if (q === '') {
    iziToast.warning({
      title: 'Увага',
      message: 'Поле пошуку не може бути поржнім!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(q)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Oops',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
}
