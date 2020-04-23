import '../sass/style.scss';

console.log('Let\'s buy something! 🤭🛒');

const purchaseButton = document.querySelector('.purchase--js');
const removeProductButtons = document.querySelectorAll('.remove--js');
const alertPopup = document.querySelector('.popup__empty--js');
let productsQuantity = document.querySelectorAll('.items--js');
let totalPrice = document.querySelector('.price--js');

checkBasketAlerts('empty')


function removeProduct(e) {
    e.target.closest('.product--js').remove();
    productsQuantity = document.querySelectorAll('.items--js');
    updatePrice();
    checkBasketAlerts('empty')
}


function updatePrice(e) {
    const currency = 'zł';
    let total = 0;
    productsQuantity.forEach(product => total += getTotalProductPrice(product));
    totalPrice.textContent = `${total.toFixed(2)} ${currency}`;
}


function getTotalProductPrice(e) {
    if(e.value < 1) e.value = 1;
    const itemAmount = e.value
    const itemPrice = e.parentNode.nextElementSibling.textContent.replace(/[^0-9\.]+/g, '');
    const multipliedPrice = parseFloat(itemAmount * itemPrice)
    return multipliedPrice;
  }

removeProductButtons.forEach(btn => btn.addEventListener('click', removeProduct));

productsQuantity.forEach(amount => {
    amount.addEventListener('change', updatePrice)
  })

function checkBasketAlerts(alertFlag) {
    switch (alertFlag) {

        case 'empty': 
            alertPopup.classList.remove('bg-teal-100', 'border-teal-500', 'text-teal-900');
            alertPopup.classList.add('bg-orange-100', 'border-range-500', 'text-orange-700');
            alertPopup.firstElementChild.textContent = 'Uwaga';
            alertPopup.lastElementChild.textContent = 'Twój koszyk jest pusty.';
            if(productsQuantity.length === 0) {
                alertPopup.style.display = 'block';
                purchaseButton.style.display = 'none';
            } else {
                alertPopup.style.display = 'none';
            }
            break;

        case 'success':
            alertPopup.classList.remove('bg-orange-100', 'border-orange-500', 'text-orange-700');
            alertPopup.classList.add('bg-teal-100', 'border-teal-500', 'text-teal-900');
            alertPopup.firstElementChild.textContent = 'Gratulację!';
            alertPopup.lastElementChild.textContent = 'Dokonałeś właściwego wyboru!';
            productsQuantity.length !== 0
            ? alertPopup.style.display = 'block' : null;
            setInterval(() => {
                alertPopup.style.display = 'none';
                document.querySelectorAll('.product--js').forEach(product => product.innerHTML = '');
                purchaseButton.style.display = 'none';
            }, 3000);
            setTimeout(() => {
                document.querySelector('.text-2xl').innerHTML = '<p style="text-align: center;">Dziękujemy za zakupy. Zapraszamy ponownie.</p>';
            }, 3000)
    }
}

purchaseButton.addEventListener('click', () => checkBasketAlerts('success'));