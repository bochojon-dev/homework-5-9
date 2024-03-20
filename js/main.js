const nav = document.querySelector(".nav-responsive");
const btnMenu = document.querySelector(".btn-menu");
const icons = document.querySelector(".icons");
const toggleNavbar = () => {
  nav.classList.toggle("open");
};
btnMenu.addEventListener("click", toggleNavbar);
const menuX = () => {
  btnMenu.classList.toggle("open");
};
btnMenu.addEventListener("click", menuX);
const titleOpen = () => {
  icons.classList.toggle("open");
};
icons.addEventListener("click", titleOpen);
document.addEventListener("scroll", () => {
  if (window.scrollY >= 60) {
    nav.classList.add("show");
  } else {
    nav.classList.remove("show");
  }
});

document.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    document.querySelector(".header2").classList.add("header-shrink");
  } else {
    document.querySelector(".header2").classList.remove("header-shrink");
  }
});

const backtop = document.querySelector(".backtop");

document.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    backtop.style.bottom = "50px";
  } else {
    backtop.style.bottom = "-50px";
  }
});
//   new topic     /////////////

//  PRODUCTS objekti QOSIMOV RAHMONJONNIKI bn bir xil server.js dan olib kelingan
import { PRODUCTS } from "./server.js";

const cards = document.querySelector(".cards");
let fragment = document.createDocumentFragment();
PRODUCTS.forEach((el, i) => {
  let div = document.createElement("div");
  div.innerHTML = `
                <div class="image">
                  <div class="sale">
                    <div class="tick">
                      <img src="./images/tick.svg" alt="tick" />
                      <p>Нет в наличии</p>
                    </div>
                    <button>SALE</button>
                    <div class="gift">
                      <img src="./images/gift.svg" alt="gift" />
                      <p>Подарок</p>
                    </div>
                  </div>
                  <img src="${el.image}" alt="image" />
                </div>
                <div style="border-top:1px solid #eaeaea" class="rating">
                  <img src="./images/rating.png" alt="rating" />
                  <p>(12) отзывов</p>
                </div>
                <h4 title="${el.description}"  class="heading">${el.description}</h4>
                <div class="cost">
                  <h4>${el.cost}$</h4>
                  <span>${el.discountPercentage}$</span>
                </div> 
    `;
  div.classList.add("card");
  fragment.appendChild(div);
});
cards.appendChild(fragment);
