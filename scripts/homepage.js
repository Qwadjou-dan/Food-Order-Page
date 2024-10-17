
import {foodlist} from '../data/foodlist.js';

// Generating HTML

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
      <button class="food-price">GHC ${(food.foodPrice).toFixed(2)}</button>
    </div>
`
})

document.querySelector('.js-foodlist')
  .innerHTML = foodlistHTML;

ßß