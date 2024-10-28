
export let basket = [{
  foodId: '001',
  quantity: 2
},{
  foodId: '002',
  quantity: 1
}];


export function removeFromBasket(foodId){
          const newBasket = [];

          basket.forEach((basketItem) => {
            if(basketItem.foodId !== foodId){
              newBasket.push(basketItem);
            };
          });
          basket = newBasket;
}