import '../sass/style.scss';

console.log('Let\'s buy something! 🤭🛒');

const purchaseButton = document.querySelector('.buy--js');
const removeProductButtons = document.querySelectorAll('.remove--js');
const alertPopup = document.querySelector('.empty--js');
let productsQuantity = document.querySelectorAll('.items--js');
let totalPrice = document.querySelector('.price--js');
