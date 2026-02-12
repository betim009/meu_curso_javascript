import { data } from "./data.js";
import { scriptEntrada } from "./scriptEntrada.js";
import { scriptSaida } from "./scriptSaida.js";
import { scriptSaldo } from "./scriptSaldo.js";

// Seletores
const painelEntrada = document.getElementById("painel-entrada");
const painelSaida = document.getElementById("painel-saida");
const painelSaldo = document.getElementById("painel-saldo");
const tabela = document.getElementById("tabela-lancamentos");
const inputText = document.getElementById("input-text");

painelEntrada.innerHTML += `
    <div class="bg-primary text-white p-3 rounded">
        <h4>Entrada: ${scriptEntrada()}</h4>
    </div>
`;
painelSaida.innerHTML += `
    <div class="bg-danger text-white p-3 rounded">
        <h4>Saida: ${scriptSaida()}</h4>
    </div>
`;

painelSaldo.innerHTML += `
    <div class="bg-success text-white p-3 rounded">
        <h4>Saldo: ${scriptSaldo()}</h4>
    </div>
`;

for (let i = 0; i < data.length; i++) {
  const lancamento = data[i];

  tabela.innerHTML += `
        <tr>
            <th scope="row">${lancamento.descricao}</th>
            <td>${lancamento.valor}</td>
            <td>${lancamento.tipo}</td>
            <td>${lancamento.data}</td>
            <td><button class="btn btn-primary">Altera</button></td>
            <td><button class="btn btn-danger">Excluir </button></td>
        </tr>
    `;
}

inputText.addEventListener("input", function ({ target }) {
  const { value, name, id } = target;
  console.log(value, name, id);
});
