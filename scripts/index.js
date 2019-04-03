/* global shoppingList, store */
'use strict';
/*globatl $*/

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

api
  .getItems()
  .then(response => response.json())
  .then(items => {
    items.forEach(item => store.addItem(item));
    shoppingList.render();
  });

console.log(api.BASE_URL);

api
  .createItem('pears')
  .then(res => res.json())
  .then(newItem => {
    return api.getItems();
  })
  .then(res => res.json())
  .then(items => {
    console.log(items);
  });
