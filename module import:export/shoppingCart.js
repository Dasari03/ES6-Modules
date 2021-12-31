//Exporting
console.log("exporting...");

const shippingCost = 10;
export const shoppingCart = [];

export const addToCart = function (product, quantity) {
  shoppingCart.push({ product, quantity });
  console.log(` ${quantity} ${product} is added to cart...`);
};

const totalPrice = 300;
const totalQuantity = 7;

export { totalPrice as tp, totalQuantity as tq };

export default function (name, age) {
  console.log(`Hello my name is ${name} and I am ${age}years old...`);
}
