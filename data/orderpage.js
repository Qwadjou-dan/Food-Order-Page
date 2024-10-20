
import {foodlist} from '../data/foodlist.js';

// Generating HTML for the ordered food list

let orderedFoodlistHTML = '';

foodlist.forEach((food) => {

orderedFoodlistHTML +=
  `
      <div class="page-layout">
        <div class="order-list">
          <div class="food-img">
            <img src="${food.foodImage}">
          </div>
          <div class="food-details">
            <p class="food-name">${food.foodName}</p>
            <p class="food-description">${food.foodInfo}</p>
          </div>
          <button class="food-price">GHC ${(food.foodPrice).toFixed(2)}</button>
          <button class="food-order js-food-order">Check out</button>
        </div>
        <div>
        </div>
      </div>
      
  `
})

document.querySelector('.js-orderedFoodlist')
  .innerHTML = orderedFoodlistHTML;

console.log(foodlist);
