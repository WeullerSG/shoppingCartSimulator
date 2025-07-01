async function addItem(userCart, item){
    userCart.push(item);
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1) {
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if(userCart[indexFound].quantity <= 1) {
        deleteItem(userCart, item.name);
    }else if (userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity--;
    }else{
        console.log("Item not found");
    }
}

async function calculateTotal(userCart) {
   const result = userCart.reduce((acc, item) => acc + item.subtotal(), 0);
   console.log("\nShopee cart total is: ");
   console.log(`Total: ${result}`);
}

async function displaycart(userCart){
    console.log("\nShopee cart list: ");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.price} - ${item.quantity} - ${item.subtotal()}`);
    });
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displaycart,
}