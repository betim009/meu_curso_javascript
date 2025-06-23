import { artilharia } from "./dados_jogadores.js";
import { tabelaCampeonato } from "./dados_times.js";

const tBodyTimes = document.getElementById("tbody-Times")
const tBodyJogadores = document.getElementById("tbody-Jogadores")

console.log(tabelaCampeonato)
for (const time of tabelaCampeonato) {
    tBodyTimes.innerHTML += ` 
        <tr class="${time.style}"> 
        <td>${time.pos}</td>  
        <td>
        <img src="${time.imagem}">
        ${time.time}
        </td>
        <td>${time.J}</td>
        <td>${time.V}</td>
        <td>${time.E}</td>
        <td>${time.D}</td>
        
        </tr>
        `;
}


for (const jogador of artilharia) {
    tBodyJogadores.innerHTML += ` 
    <tr> 
        <td>
        <img src="${jogador.imagem}">
        ${jogador.jogador}
        </td>  
        <td>${jogador.gols}</td>
        <td>${jogador.assistencias}</td>
    </tr>
            `;
}