import { navigateTo } from "../index.js";

export const clickFunc = function () {
  const btn = document.querySelector("#flexHome");
  console.log(btn);
  btn.addEventListener("click", () => {
    navigateTo("/edit");
  });
};

// export const changeHomeImg = function () {
//   const imgchange = document.querySelector("#homeImg");
//   imgchange.src = "src/assets/pen.png";
//   console.log("change");
//   console.log(imgchange.src);
// };

const homeLogic = function () {};

export default homeLogic;
