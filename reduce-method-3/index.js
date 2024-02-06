// This time, we'll find the most expensive item in the shopping cart.

const shoppingCart = [
  { item: "Shirt", price: 20 },
  { item: "Jeans", price: 50 },
  { item: "Shoes", price: 40 },
  { item: "Hat", price: 10 },
];

function findMostExpensiveItem(cart) {
  const mostExpensiveItem = shoppingCart.reduce((item, currentItem) => {
    return currentItem.price > item.price ? currentItem : item;
  }, cart[0]);
  return mostExpensiveItem;
}

let result = findMostExpensiveItem(shoppingCart);

console.log("The most expensive price is", result);
