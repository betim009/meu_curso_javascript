import { createUsers } from "./scripts/createUsers";
import { getUsers } from "./services/getUsers";
import "./style.css";
// Importa o CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Importa o JS (opcional, só se for usar dropdown, modal, etc.)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const inputBuscar = document.getElementById("input-buscar");
const btnBuscar = document.getElementById("btn-buscar");

window.addEventListener("load", async () => {
  const users = await getUsers();
  createUsers(users);
  const trsUsers = document.querySelectorAll(".tr-user"); // Retorna ARRAY

  trsUsers.forEach((tr, index) => {
    tr.addEventListener("click", () => {
      const nome = tr.childNodes[1].textContent
      alert()
      // window.location.href = `src/pages/user/index.html?nome=${nome}`
    })
  });
  
});

btnBuscar.addEventListener("click", async () => {
  const valorDigitado = inputBuscar.value;
  const users = await getUsers();

  const filterUsers = users.filter((element) => element.name === valorDigitado);
  createUsers(filterUsers);
});
