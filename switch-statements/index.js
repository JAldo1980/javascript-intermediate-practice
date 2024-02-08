function orderItem(item) {
  let priceStr = "";
  switch (item) {
    case "coffee":
      priceStr = "£2";
      break;
    case "tuna sandwich":
      priceStr = "£1.50";
      break;
    case "green salad":
      priceStr = "£1.75";
      break;
    case "chocolate cake":
      priceStr = "£3.25";
      break;
    default:
      return `I am sorry, ${item} is not on the menu today.`;
  }
  return `You ordered ${item}. That will be ${priceStr}, please.`;
}

console.log(orderItem("pudding"));
