import { renderOrderSummary } from "./checkout/order-summary.js";
import { renderPaymentSummary } from "./checkout/payment-summary.js";
import { renderCheckoutHeader } from "./checkout/checkout-header.js";
// import '../data/cart-class.js'
// import '../data/car.js'
// import '../data/backend-practice.js';
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCarts } from "../data/cart.js";

Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCarts(() => {
      resolve();
    })
  }) 

]).then((values) =>{
  console.log(values);
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });
}).then(() => {
  return new Promise((resolve) => {
    loadCarts(() => {
      resolve();
    });
  });
}).then(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});

*/
/*
loadProducts(() => {
  loadCarts(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });
});

*/