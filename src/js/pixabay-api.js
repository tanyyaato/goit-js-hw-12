'use strict';

import axios from 'axios';
const URL = 'https://pixabay.com/api/';
const API_KEY = '45156529-f4caada2c6812495035285f69';
axios.defaults.baseURL = URL;
export function searchPhotoByQuery(query, page = 1, per_page = 15) {
  return axios.get('', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: per_page,
    },
  });
}
