import { navigateTo } from "../index.js";

export const clickFunc = function () {
  const btn = document.querySelector("#homeBtn");
  btn.addEventListener("click", () => {
    navigateTo("/edit");
  });
};

export const changeHomeImg = function () {
  const imgchange = document.querySelector("#homeImg");
  imgchange.src = "../src/assets/pen.png";
};

export const addHomeComponent = function () {
  const msgContainer = document.querySelector("#homeMessages");
  console.log(msgContainer);
  const testDiv = document.createElement("div");
  msgContainer.appendChild(testDiv);

  testDiv.setAttribute("id", "test");
  const para = document.createElement("p");
  const but = document.createElement("button");
  para.innerHTML = "text";
  but.innerHTML = "test";
  testDiv.appendChild(para);
  testDiv.appendChild(but);
};

const homeLogic = function () {};

export default homeLogic;
