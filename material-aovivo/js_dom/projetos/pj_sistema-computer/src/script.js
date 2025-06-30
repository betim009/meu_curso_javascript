import { servicosManutencao } from "./mocks/servicos.js";

const divServicos = document.getElementById("div-servicos");
for (const element of servicosManutencao) {
  divServicos.innerHTML += `
        <div class="col-sm-12 col-md-6 col-lg-4  d-flex justify-content-center"> 
            <div class="card my-card">
                <div>
                  <img src="${element.poster}" class="card-img-top" alt="..."/>
                </div>
                <div class="card-body">
                  <h5>${element.nome} </h5>
                  <p>${element.descricao} </p>
                  <p>${element.disponivel ? "disponivel" : "indisponivel"}</p> 
                   <p>${element.duracao}</p>
                  <h6 class="text-secondary">R$${element.preco}</h6> 
                  <button class="btn btn-primary btn-adicionar">Adicionar</button>
                </div>
            </div>     
        </div>
    `
}

// O primerio evento que acontece em uma página. É o de carregar.
window.addEventListener('load', function() {
  const lsUsuario = localStorage.getItem('id-user');
  console.log(lsUsuario)
  // Não existe o usuário no localStorage...
  if (!lsUsuario) {
    // Então vai para a pagina de login ...
    return window.location.href = "./src/pages/login/login.html"
  }
  
  const btnsAdicionar = document.querySelectorAll('.btn-adicionar');

  for (const element of btnsAdicionar) {
    element.addEventListener('click', function() {
      alert('click');
    })
  }
});