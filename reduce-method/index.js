// The task is to use reduce to find the total cost of items in a shopping cart. Each item in the shopping cart has a name and a price.

const shoppingCart = [
  { item: "Shirt", price: 20 },
  { item: "Jeans", price: 50 },
  { item: "Shoes", price: 40 },
  { item: "Hat", price: 10 },
];

function calculateTotalCost(cart) {
  const totalCost = shoppingCart.reduce((total, current) => {
    return total + current.price;
  }, 0);
  return totalCost;
}

const result = calculateTotalCost(shoppingCart);
console.log("Total cost of cart:", result);
