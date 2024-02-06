// Let's create another challenge involving the reduce method. This time, we'll find the average price of the items in the shopping cart.
const shoppingCart = [
  { item: "Shirt", price: 20 },
  { item: "Jeans", price: 50 },
  { item: "Shoes", price: 40 },
  { item: "Hat", price: 10 },
];

function calculateAveragePrice(cart) {
  const averagePrice =
    shoppingCart.reduce((itemPrice, currentItem) => {
      return itemPrice + currentItem.price;
    }, 0) / shoppingCart.length;

  return averagePrice;
}

let result = calculateAveragePrice(shoppingCart);

console.log("The average price is", result);
