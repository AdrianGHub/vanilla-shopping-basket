import '../sass/style.scss';

console.log('Let\'s buy something! 🤭🛒');

const purchaseButton = document.querySelector('.buy--js');
const removeProductButtons = document.querySelectorAll('.remove--js');
const alertPopup = document.querySelector('.empty--js');
let productsQuantity = document.querySelectorAll('.items--js');
let totalPrice = document.querySelector('.price--js');


function removeProduct(e) {
    e.target.closest('.product--js').remove();
    productsQuantity = document.querySelectorAll('.items--js');
}

removeProductButtons.forEach(btn => btn.addEventListener('click', removeProduct));
