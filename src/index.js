import { renderHomePage } from "./home";
import { renderMenuPage } from "./menu";
import { renderContactPage } from "./contact";

const contentContainer = document.querySelector(".content");

const logoLink = document.querySelector("li.logo");
const homeLink = document.querySelector("li.home");
const menuLink = document.querySelector("li.menu");
const contactLink = document.querySelector("li.contact");

logoLink.addEventListener("click", () => {
    contentContainer.innerHTML = renderHomePage();
    resetActiveClasses();
    homeLink.classList.add("active");
} );

homeLink.addEventListener("click", () => {
    contentContainer.innerHTML = renderHomePage();
    resetActiveClasses();
    homeLink.classList.add("active");
} );

menuLink.addEventListener("click", () => {
    contentContainer.innerHTML = renderMenuPage();
    resetActiveClasses();
    menuLink.classList.add("active");
} );

contactLink.addEventListener("click", () => {
    contentContainer.innerHTML = renderContactPage();
    resetActiveClasses();
    contactLink.classList.add("active");
} );

const resetActiveClasses = () => {
    homeLink.classList.remove("active");
    menuLink.classList.remove("active");
    contactLink.classList.remove("active");
};

contentContainer.innerHTML = renderHomePage();
homeLink.classList.add("active");