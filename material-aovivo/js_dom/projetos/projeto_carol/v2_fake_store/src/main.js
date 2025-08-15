import "./style.css";
import { createAllProducts } from "./scripts/createAllProducts.js";
import { getProdcts } from "./services/getProducts.js";
import { createAllCarts } from "./scripts/createAllCarts.js";
import { getCarts } from "./services/getCarts.js";

window.addEventListener("load", async () => {
  const carts = await getCarts();
  const products = await getProdcts();
  
  createAllProducts(products);
  createAllCarts(carts);
});
