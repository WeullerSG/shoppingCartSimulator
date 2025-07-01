import createItem from './services/item.js';
import * as cartService from './services/cart.js';


const myCart = [];
const myWishList = [];

console.log("Welcome to the your shopee cart!")

const item1 = await createItem("Hotwheels ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels lamborghini", 39.99, 3);
const item3 = await createItem("Hotwheels porsche", 29.99, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myWishList, item3);
await cartService.addItem(myCart, item2);

// await cartService.removeItem(myCart, 1);
// await cartService.removeItem(myCart, 2);

await cartService.removeItem(myCart, item2);
// await cartService.removeItem(myCart, item2);

// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

await cartService.displaycart(myCart);

await cartService.calculateTotal(myCart);

