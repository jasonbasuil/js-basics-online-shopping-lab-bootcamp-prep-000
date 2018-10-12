var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {};
  newItem.itemName = item;
  newItem.itemPrice = Math.floor(Math.random() * 101);
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
}

function viewCart() {
  itemNames = [];
  itemPrices = [];
  string1 = 'In your cart, you have '
  string2 = []
  string3 = 'and'
  string4 = []
  singleSentence = 
  
  //iterate through cart Objects, and return itemName & itemPrice into separate arrays
  //use a loop to iterate through the two arrays with conditionals based on the number of items 
  
  //for 3+ items
  for (i = 0; i <= itemNames.length; i++){
    if (itemNames.length === 1){
    return (`In your cart, you have ${itemNames[0]} at $${itemPrices[0]}.`);
  }
    else if (itemNames.length ===2){
      return (`In your cart, you have ${itemNames[0]} at $${itemPrices[0]}, and ${itemNames[1]} at $${itemPrices[1]}.`)}
    else{
      ...
      
      return (`In your cart, you have $)
    }
    
  
  
  

  for (itemNumber = 0; itemNumber <= itemNumber.length; itemNumber++){
    currentItem.push(cart[itemName]);
    currentPrice.push(cart[itemPrice]);
  
}  
  
  
}

function total() {
  
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
