'use strict';
const picturesList = document.querySelector('.list');
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const lightbox = new SimpleLightbox('.list  a', {
  captionsData: 'alt',
});
export function markUpRequest(hits) {
  const markUp = hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class = "list-item">
  <a href="${largeImageURL}">
    <div class = "preview-photo"><img src="${webformatURL}" alt="${tags}"></div>
     <ul class="img-desc">
    <li>
      <h2>Likes</h2>
      <p>${likes}</p>
    </li>
    <li>
      <h2>Views</h2>
      <p>${views}</p>
    </li>
    <li>
      <h2>Comments</h2>
      <p>${comments}</p>
    </li>
    <li>
      <h2>Downloads</h2>
      <p>${downloads}</p>
    </li>
  </ul>
  </a>

</li>`;
      }
    )
    .join('');
  picturesList.insertAdjacentHTML('beforeend', markUp);
  lightbox.refresh();
}
//

export function catchError() {
  return iziToast.show({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    color: 'red',
    position: 'topRight',
    closeOnClick: true,
  });
}
