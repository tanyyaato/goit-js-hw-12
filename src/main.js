'use strict';

import { markUpRequest, catchError } from './js/render-functions.js';
import { searchPhotoByQuery } from './js/pixabay-api.js';
const picturesList = document.querySelector('.list');
const form = document.querySelector('.js-form');
const warningText = document.querySelector('.end-text');
const loadMoreBtn = document.querySelector('.load-more-btn');

let page = 1;
let per_page = 15;
let inputValue = '';
loadMoreBtn.addEventListener('click', loadMore);
form.addEventListener('submit', getRequest);
async function getRequest(event) {
  event.preventDefault();
  picturesList.innerHTML = '';
  page = 1;
  const query = form.elements.request.value.trim().toLowerCase();
  inputValue = query;
  if (!inputValue) {
    return catchError();
  }
  try {
    const response = await searchPhotoByQuery(inputValue, page, per_page);
    if (response.data.hits.length > 0) {
      page += 1;
      markUpRequest(response.data.hits);
      loadMoreBtn.style.display = 'block';
    } else if (response.data.hits.length === 0) {
      throw new Error(error.response);
    } else if (response.data.totalHits <= per_page) {
      loadMoreBtn.style.display = 'none';
    }
  } catch (error) {
    console.log(error.message);

    return catchError();
  }
  form.reset();
}
async function loadMore() {
  const response = await searchPhotoByQuery(inputValue, per_page);

  console.log(page);
  console.log(response.data.totalHits);

  if (page < Math.ceil(response.data.totalHits / per_page)) {
    page += 1;
    markUpRequest(response.data.hits);
    loadMoreBtn.style.display = 'block';
  } else {
    loadMoreBtn.removeEventListener('click', loadMore);
    loadMoreBtn.replaceWith(warningText);
    warningText.style.display = 'block';
    warningText.textContent =
      "We're sorry, but you've reached the end of search results.";
  }
}
