import Error404Screen from "./screens/Error404Screen.js";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import { partRequestURL } from "./utils.js";
const routes = {
  "/": HomeScreen,
  "/product/:id": ProductScreen,
};

const router = async() => {
  const request = partRequestURL();
  const parseURL =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" :"") +
    (request.verb ? `/&{request.verb}` :"");
  const screen = routes[parseURL] ? routes[parseURL] : Error404Screen;
  const main = document.querySelector("#main-container");
  main.innerHTML = await  screen.render();
};
window.addEventListener("load", router);
window.addEventListener("hashchange", router);
