/* global shoppingList, store */
'use strict';
/*globatl $*/

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

api
  .getItems()
  .then(res => res.json())
  .then(items => {
    items.forEach(item => store.addItem(item));
    shoppingList.render();
  }) 
  .then(() => console.log('updated!'));

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
