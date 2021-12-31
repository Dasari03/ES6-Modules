//Importing..
// import {
//   addToCart as addingToCart,
//   totalPrice as price,
//   totalQuantity,
// } from "./shoppingCart.js";
console.log("importing...");
// addingToCart("apple", 3);
// console.log(price, totalQuantity);

import * as ShoppingCart from "./shoppingCart.js";
console.log(ShoppingCart.tq);
console.log(ShoppingCart.tp);

import intro from "./shoppingCart.js";
intro("mingyun", 34);

ShoppingCart.addToCart("bread", 1);
ShoppingCart.addToCart("watermelon", 1);

console.log(ShoppingCart.shoppingCart);
