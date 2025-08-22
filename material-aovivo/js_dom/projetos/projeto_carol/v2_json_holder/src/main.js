import { createUsers } from "./scripts/createUsers";
import { getUsers } from "./services/getUsers";
import "./style.css";
// Importa o CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Importa o JS (opcional, só se for usar dropdown, modal, etc.)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

window.addEventListener("load", async () => {
  const users = await getUsers();
  createUsers(users);
});
