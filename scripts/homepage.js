
import {foodlist} from '../data/foodlist.js';
import {formatCurrency} from './utils/money.js';
// import {basket} from '../data/foodBasket.js';


// Generating HTML for the food list (food cards)

let foodlistHTML = '';

foodlist.forEach((food) => {

foodlistHTML +=

 `
    <div class="food-card">
      <div class="food-img">
       <img src="${food.foodImage}">
      </div>
      <p class="food-name">${food.foodName}</p>
      <p class="food-description">${food.foodInfo}</p>
      <button class="food-price">GHC ${formatCurrency(food.foodPrice)}</button>
      <button class="food-order js-food-order" data-food-id = "${food.foodId}">Order</button>
    </div>
`;
})

// DOM for adding the generated HTML to the webpage

document.querySelector('.js-foodlist')
  .innerHTML = foodlistHTML;


// Function to update the number of order placed

// let orderQuantity = 0;

// function updateFoodBasket(){
//   orderQuantity += 1;
//   document.querySelector('.js-order-quantity')
//     .innerHTML = orderQuantity;
// }


// //Adding to order page

// document.querySelectorAll('.js-food-order')
//  .forEach((button) => {
//    button.addEventListener('click', () => {
//       const foodId = button.dataset.foodId;
//       updateFoodBasket();
//     });
//   });




