import { button } from "../../components/button";
import { header } from "../../components/header";
import "./login.css";

const propsNavigation = {
    home: "../../../index.html",
    login: "./index.html",
};
const app = document.getElementById("app");

app.innerHTML += header(propsNavigation);
app.innerHTML += button("Excluir");
