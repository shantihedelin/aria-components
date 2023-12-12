import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

const btnEl = document.querySelector("#btn");
const modalEl = document.querySelector("#accessibleModal");
const closeModalBtnEl = document.querySelector("#closeModalBtn");

let open = btnEl.getAttribute("aria-expanded") === "true";

// Knappen för att öppna modalen.
btnEl.addEventListener("click", (event) => {
  open = !open;
  btnEl.setAttribute("aria-expanded", open + "");
  modalEl.style.display = "block";
  document.querySelector("#overlay").style.display = "block";
});

// Knappen för att stänga modalen.
closeModalBtnEl.addEventListener("click", (event) => {
  open = false;
  btnEl.setAttribute("aria-expanded", "false");
  modalEl.style.display = "none";
  document.querySelector("#overlay").style.display = "none";
});

const btn2El = document.querySelector("#btn2");
const accessibleDialogEl = document.querySelector("#accessibleDialog");
const closeDialogBtnEl = document.querySelector("#closeDialogBtn");

btn2El.addEventListener("click", () => {
  accessibleDialogEl.showModal();
});

closeDialogBtnEl.addEventListener("click", () => {
  accessibleDialogEl.close();
});

const menuButtonEl = document.querySelector("#menuButton");
const menuContentEl = document.querySelector("#menuContent");

let open2 = menuButtonEl.getAttribute("aria-expanded") === true;

menuButtonEl.addEventListener("click", (event) => {
  open2 = !open2;
  menuButtonEl.setAttribute("aria-expanded", open2 + "");
  menuContentEl.style.display = open2 ? "block" : "none";
});
