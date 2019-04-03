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

  function deleteItem(id){
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: ''
    });
  }
  // function findAndUpdate(id, newData){
  //   try {
  //     Item.validateName(newData);
  //     const item = this.findById(id);
  //     item.name = newData;
  //   } catch (e) {
  //     console.log('Cannot update name: ' + e.message);
  //   }
  //   const item = this.items.findById(id);
  //   item.checked = !item.checked;
  //   Object.assign(newData, item);
  // }

  return { createItem, getItems, updateItem, deleteItem };
})();
