'use strict';

import { markUpRequest, catchError } from './js/render-functions.js';
import { searchPhotoByQuery } from './js/pixabay-api.js';
const picturesList = document.querySelector('.list');
const form = document.querySelector('.js-form');
const warningText = document.querySelector('.end-text');
const loadMoreBtn = document.querySelector('.load-more-btn');

let page = null;
let per_page = 15;
let inputValue = '';
let totalPage = null;

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
    totalPage = Math.ceil(response.data.totalHits / per_page);

    if (response.data.hits.length > 0) {
      markUpRequest(response.data.hits);

      if (response.data.totalHits > per_page) {
        loadMoreBtn.style.display = 'block';
      } else {
        loadMoreBtn.remove();
        warningText.remove();
      }
    } else if (response.data.hits.length === 0) {
      throw new Error(error.response);
    }
  } catch (error) {
    console.log(error.message);
    return catchError();
  } finally {
    form.reset();
  }
}

async function loadMore() {
  page += 1;

  try {
    const response = await searchPhotoByQuery(inputValue, page, per_page);
    markUpRequest(response.data.hits);
    if (page >= totalPage) {
      loadMoreBtn.removeEventListener('click', loadMore);
      loadMoreBtn.replaceWith(warningText);
      warningText.style.display = 'block';
      warningText.textContent =
        "We're sorry, but you've reached the end of search results.";
    }
  } catch (error) {
    console.log(error.message);
  }
}
