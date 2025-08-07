import product from "./products.js";

// Importação de modulos incopatives com o ES module:
import path from "path";

// Possivel exportar tudo de uma vez para uma unica variável:
import * as productModule from "./products.js";

// productModule.Product

// const product = createProduct(32, "Lamiza Azure", "257 créditos");

const product2 = new product.Product(
  33,
  "Fragmento da meia noite",
  "1578 créditos"
);

// console.log(product.getInfo());

console.log(product2.getInfo());
