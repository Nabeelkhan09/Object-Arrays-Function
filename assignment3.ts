//                         Assignment 03.

// Company Product catalog.

let inventory: product[] = [];

type product = {
    name: string,
    model: number,
    price: number,
    isAvailable: boolean
};

let product1 = {
    name: "Dell i5 8th GEN",
    model: 2021,
    price: 55000,
    isAvailable: true
};

let product2 = {
    name: "Techno Spark 30",
    model: 2024,
    price: 33000,
    isAvailable: true 
};

let product3 = {
    name: "Samsung led tv",
    model: 2024,
    price: 60000,
    isAvailable: true
};

inventory.push(product1, product2, product3);
console.log(inventory);
console.log(inventory[1].isAvailable);
console.log(inventory[2].price);
console.log(inventory[0].name);