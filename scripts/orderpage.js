
import {basket} from '../data/foodBasket.js'
import {foodlist} from '../data/foodlist.js';


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
       <button class="food-price">GHC ${(matchingFood.foodPrice).toFixed(2)}</button>
      </div>
  </div>   
  `;
});


document.querySelector('.js-orderedFoodlist')
  .innerHTML = orderSummaryHTML;

