import "./css/reset.css";
import "./css/styles.css";

import cafeImage from "./assets/cafe.png";
import logoImage from "./assets/logo.png";

const mainImage = document.createElement("img");
mainImage.src = cafeImage;

document.body.appendChild(mainImage);

const logo = document.createElement("img");
logo.src = logoImage;

const nav = document.querySelector("nav");
nav.appendChild(logo);

console.log("Hello");
