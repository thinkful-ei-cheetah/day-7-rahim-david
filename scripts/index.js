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
    const item = store.items[0];
    console.log('current name: ', item);
    store.findAndUpdate(item.id, { name: 'foobar3' });
    console.log('new name: ', item);
  }) 
  .then(() => {
    const item = store.items[0];
    shoppingList.render();
    return api.updateItem(item.id, { name: 'foobar3' });
  })
  .then(res => res.json())
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
