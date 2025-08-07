const { createProduct, Product } = require("./products");

const product = createProduct(32, "Lamiza Azure", "257 créditos");

const product2 = new Product(33, "Fragmento da meia noite", "1287 créditos");

console.log(product.getInfo());

console.log(product2.getInfo());
