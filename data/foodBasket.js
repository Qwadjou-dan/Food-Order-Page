
export let basket = JSON.parse(localStorage.getItem('basket'));

if(!basket){
  basket = [{
    foodId: '001',
    quantity: 2
  },{
    foodId: '002',
    quantity: 1
  }]; 
}

function saveToStorage() {
  localStorage.setItem('basket', JSON.stringify(basket));
}

export function addToBasket(foodId) {
  let matchingItem;

  basket.forEach((basketItem) => {
    if(foodId === basketItem.foodId){
      matchingItem = basketItem;
    }
  })

  if(matchingItem){
    matchingItem.quantity += 1;
  } else {
      basket.push({
        foodId: foodId,
        quantity: 1
    })}

    saveToStorage();
}


export function removeFromCart(foodId) {
  let newBasket = [];
  basket.forEach((basketItem) => {
    if(basketItem.foodId !== foodId){
      newCart.push(basketItem);
    }
  })

  basket = newBasket;
  saveToStorage();
}



export function removeFromBasket(foodId){
          let newBasket = [];

          basket.forEach((basketItem) => {  
            if(basketItem.foodId !== foodId){
              newBasket.push(basketItem);
            };
          });
          basket = newBasket;
          saveToStorage()
        }