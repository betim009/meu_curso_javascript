import { loja } from "./loja.js";

// SELETOR
const divCards = document.getElementById("div-cards");

loja.forEach((element, index) => {
  divCards.innerHTML += `
    <div class="col-sm-12 col-lg-6">
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${element.image}" class="img-fluid rounded-start" alt="...">
                </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.description}</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated ${index} mins ago</small></p>

                            <div class="d-grid gap-2">
                                <a href="${element.link}" class="btn btn-primary" type="button">Buy</a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    `;
});
