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
    updatePrice();
}


function updatePrice(e) {
    const currency = 'zł';
    let total = 0;
    productsQuantity.forEach(product => total += getTotalProductPrice(product));
    totalPrice.textContent = `${total} ${currency}`;
}


function getTotalProductPrice(e) {
    if(e.value < 1) e.value = 1;
    const itemAmount = e.value
    const itemPrice = e.parentNode.nextElementSibling.textContent.replace(/[^0-9\.]+/g, '');
    return parseInt(itemAmount * itemPrice);
  }

removeProductButtons.forEach(btn => btn.addEventListener('click', removeProduct));

productsQuantity.forEach(amount => {
    amount.addEventListener('change', updatePrice)
  })