import { servicosManutencao } from "./mocks/servicos.js";

const divServicos = document.getElementById("div-servicos");
for (const element of servicosManutencao) {
  divServicos.innerHTML += `
        <div class="col-sm-12 col-md-6 col-lg-4 bg-dark d-flex justify-content-center"> 
            <div class="card my-card">
                <img src="${element.poster}" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5>${element.nome} </h5>
                  <p>${element.descricao} </p>
                  <p>${element.disponivel ? "disponivel" : "indisponivel"}</p> 
                   <p>${element.duracao}</p>
                  <h6 class="text-secondary">R$${element.preco}</h6> 
                </div>
            </div>     
        </div>
    `
}