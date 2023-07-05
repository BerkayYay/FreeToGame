import axios from 'axios';
import {showError, showSuccess} from '../helper/helpers';

const BASE_URL = 'https://www.freetogame.com/api/games';

export const getFilteredGames = (platform, category, sortBy) => {
  const promise = new Promise((resolve, reject) => {
    let url = BASE_URL;

    // Platform filtresi
    if (platform !== 'All') {
      url += `?platform=${platform}`;
    }

    // Kategori filtresi
    if (category) {
      url += `&category=${category}`;
    }

    // Sıralama filtresi
    if (sortBy) {
      url += `&sort-by=${sortBy}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
  return promise;
};

export const getAllGames = () => {
  const promise = new Promise((resolve, reject) => {
    fetch(BASE_URL, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then(response => {
        resolve(response.json());
      })
      .catch(error => {
        reject(error);
      });
  });
  return promise;
};

export const getGamesByPlatform = platform => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}?platform=${platform}`)
      .then(response => {
        showSuccess('Success', 'Games are filtered by platform successfully');
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getGamesByCategory = category => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}?category=${category}`)
      .then(response => {
        showSuccess('Success', 'Games are filtered by category successfully');
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
