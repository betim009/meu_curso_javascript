// Importa o CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Importa o JS (opcional, só se for usar dropdown, modal, etc.)
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createUsers } from "../../scripts/createUsers";

const getUser = async () => {
  const params = new URLSearchParams(window.location.search);
  const nome = params.get("nome");
  try {
    const req = await fetch(
      `https://jsonplaceholder.typicode.com/users?name=${nome}`
    );
    const res = await req.json();

    return res;
  } catch (error) {}
};

window.addEventListener("load", async () => {
  const user = await getUser();
  createUsers(user);
});
