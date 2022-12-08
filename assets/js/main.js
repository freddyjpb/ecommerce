import { activeProduct } from './exported/activeProduct.js';
import { renderCart } from './exported/cart.js';
import { cartMenu } from './exported/cartMenu.js';
import { darkMode } from './exported/darkMode.js';
import { headerScroll } from './exported/headerScroll.js';
import { load } from './exported/load.js';
import { navMenu } from './exported/navMenu.js';
import { renderProducts } from './exported/products.js';
import { sectionActive } from './exported/sectionActive.js';

window.addEventListener('load', function () {
  load();
})

document.addEventListener('DOMContentLoaded', function () {
  darkMode();
  headerScroll();
  navMenu();
  cartMenu();
  sectionActive();
  renderCart();
  renderProducts();
  activeProduct();

  mixitup('.products__content', {
    selectors: {
      target: '.products__card'
    },
    animation: {
      duration: 500
    }
  }).filter('all')
});
