import "./style.css";
import { header } from "./components/header";
import { button } from "./components/button";

const propsNavigation = {
    home: "./",
    login: "./src/pages/login/index.html",
};

window.addEventListener("load", () => {
  const app = document.getElementById("app");
  app.innerHTML += header(propsNavigation);
  app.innerHTML += button("Cadastrar");
});
