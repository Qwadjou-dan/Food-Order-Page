
import {addToBasket, basket} from '../data/foodBasket.js';
import {foodlist} from '../data/foodlist.js';
import {formatCurrency} from './utils/money.js';
// import {basket} from '../data/foodBasket.js';


// Generating HTML for the food list (food cards)

let foodlistHTML = '';

foodlist.forEach((foodItem) => {

foodlistHTML +=

 `
    <div class="food-card">
      <div class="food-img">
       <img src="${foodItem.foodImage}">
      </div>
      <p class="food-name">${foodItem.foodName}</p>
      <p class="food-description">${foodItem.foodInfo}</p>
      <button class="food-price">GHC ${formatCurrency(foodItem.foodPrice)}</button>
      <button class="food-order js-food-order" data-food-id = "${foodItem.foodId}">Order</button>
    </div>
`;
})

// DOM for adding the generated HTML to the webpage

document.querySelector('.js-foodlist')
  .innerHTML = foodlistHTML;


  function updateBasketQuantity(){
    let basketQuantity = 0;

      basket.forEach((basketItem) => {
        basketQuantity += basketItem.quantity;
      })

      document.querySelector('.js-order-quantity')
        .innerHTML = basketQuantity;
  }

 document.querySelectorAll('.js-food-order')
  .forEach((button) => {
    
    button.addEventListener('click', () => {
      const foodId = button.dataset.foodId;
      addToBasket(foodId);
      updateBasketQuantity();
    })
  })





