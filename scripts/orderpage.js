
import {basket, removeFromBasket} from '../data/foodBasket.js';
import {foodlist} from '../data/foodlist.js';
import {formatCurrency} from './utils/money.js';


let orderSummaryHTML = '';

basket.forEach((food) => {

//Normalizing the data
//This enables us to get all the info about the food by using only the foodId
  const foodId = food.foodId; 

// With this, matchingFood will display all info about the foodItem and not just the foodId
  let matchingFood;

  foodlist.forEach((foodItem) => {
    if(foodItem.foodId === foodId){
      matchingFood = foodItem;
    }
    
  })
orderSummaryHTML += 
  `
  <div class="page-layout">
      <div class="order-list">
       <div class="food-img">
         <img src="${matchingFood.foodImage}">
       </div>
       <div class="food-details">
          <p class="food-name">${matchingFood.foodName}</p>
          <p class="food-description">${matchingFood.foodInfo}</p>
          <p class="food-quantity">${food.quantity}</p>
       </div>
       <div>
       <button class="food-price">GHC ${formatCurrency(matchingFood.foodPrice)}</button>
       <p class="js-remove-link remove-link" data-product-id = "${matchingFood.foodId}">Remove</p>
       </div>
      </div>
  </div>   
  `;
});


document.querySelector('.js-orderedFoodlist')
  .innerHTML = orderSummaryHTML;


document.querySelectorAll('.js-remove-link')
   .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromBasket(productId)
      console.log(basket);
      
    });
   });

