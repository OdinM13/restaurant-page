import "./css/reset.css";
import "./css/styles.css";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";

import cafeImage from "./assets/cafe.png";
import logoImage from "./assets/logo.png";

const mainImage = document.createElement("img");
mainImage.classList.add("mainImage");
mainImage.src = cafeImage;

const content = document.querySelector("#content");
content.appendChild(mainImage);

const logo = document.createElement("img");
logo.classList.add("logo");
logo.src = logoImage;

const nav = document.querySelector("nav");
nav.appendChild(logo);

const blackBox = document.createElement("div");
blackBox.classList.add("blackbox");
content.appendChild(blackBox);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");

homeButton.addEventListener("click", () => {
    removeAllChildNodes(blackBox);
    blackBox.appendChild(homePage());
})

menuButton.addEventListener("click", () => {
    removeAllChildNodes(blackBox);
    blackBox.appendChild(menuPage());
})

contactButton.addEventListener("click", () => {
    removeAllChildNodes(blackBox);
    blackBox.appendChild(contactPage());
})

blackBox.appendChild(homePage());
