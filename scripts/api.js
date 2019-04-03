'use strict';

let api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/david';

  function getItems() {
    return fetch(`${BASE_URL}/items`);
  }
  return { getItems };
})();
