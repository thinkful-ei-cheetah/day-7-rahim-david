/* global shoppingList, store */
'use strict';
/*globatl $*/

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

api.getItems().then(response => response.json());

console.log(api.BASE_URL);
