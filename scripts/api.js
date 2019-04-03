'use strict';

let api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/david';

  function getItems() {
    return fetch(`${BASE_URL}/items`);
  }

  function createItem(name) {
    let newItem = JSON.stringify({ name });
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: newItem
    });
  }

  function updateItem(id, updateData) {
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData)
    });
  }
  return { createItem, getItems, updateItem };
})();
