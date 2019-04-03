'use strict';

let api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/david';
  function getItems(){
    return Promise.resolve('A successful response!');
  }
  return {getItems};
})();

