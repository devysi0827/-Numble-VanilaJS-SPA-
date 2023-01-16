import Home from "./pages/Home.js";
import Detail from "./pages/Detail.js";
import Edit from "./pages/Edit.js";
import Button from "./components/button.js";
import Div from "./components/div.js";

console.log("im index");

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Home, jsFile: Button },
    { path: "/detail", view: Detail },
    { path: "/edit", view: Edit, jsFile: Div },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find(
    (potentialMatches) => potentialMatches.isMatch
  );

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  // spa change
  const view = new match.route.view();

  document.querySelector("#root").innerHTML = await view.getHtml();
  match.route.jsFile();
};

// 세션 기록이 바뀔 때 일어나는 이벤트를 별도 처리
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      // 기존 이벤트를 막고
      e.preventDefault();
      // 이동
      navigateTo(e.target.href);
    }
  });
  router();
});
