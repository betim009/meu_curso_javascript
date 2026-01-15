const segundaFeira = [0, 5, 12, 19, 26];

const tercaFeira = [0, 6, 13, 20, 27];

const quartaFeira = [0, 7, 14, 21, 28];

const quintaFeira = [1, 8, 15, 22, 29];

const sextaFeira = [2, 9, 16, 23, 30];

const sabado = [3, 10, 17, 24, 31];

const domingo = [4, 11, 17, 24, 0];

const divColSeg = document.getElementById("div-col-seg");
const divColTer = document.getElementById("div-col-ter");
const divColQua = document.getElementById("div-col-qua");
const divColQui = document.getElementById("div-col-qui");
const divColSex = document.getElementById("div-col-sex");
const divColSab = document.getElementById("div-col-sab");
const divColDom = document.getElementById("div-col-dom");

segundaFeira.forEach((element, index) => {
  if (element === 0) {
    divColSeg.innerHTML += `
            <div class="vazio">

            </div>
        `;
  } else {
    divColSeg.innerHTML += `
            <div class="dia">
                <p>${element}</p>
            </div>
        `;
  }
});

tercaFeira.forEach((element, index) => {
  if (element === 0) {
    divColTer.innerHTML += `
            <div class="vazio">

            </div>
        `;
  } else {
    divColTer.innerHTML += `
            <div class="dia">
                <p>${element}</p>
            </div>
        `;
  }
});

quartaFeira.forEach((element, index) => {
  if (element === 0) {
    divColQua.innerHTML += `
            <div class="vazio">

            </div>
        `;
  } else {
    divColQua.innerHTML += `
            <div class="dia">
                <p>${element}</p>
            </div>
        `;
  }
});

quintaFeira.forEach((element, index) => {
  if (element === 0) {
    divColQui.innerHTML += `
            <div class="vazio">

            </div>
        `;
  } else if (element === 1) {
    divColQui.innerHTML += `
            <div class="feriado">
                <p>${element}</p>
            </div>
        `;
  } else {
    divColQui.innerHTML += `
            <div class="dia">
                <p>${element}</p>
            </div>
        `;
  }
});

sextaFeira.forEach((element, index) => {
  if (element === 0) {
    divColSex.innerHTML += `
            <div class="vazio">

            </div>
        `;
  } else {
    divColSex.innerHTML += `
            <div class="dia">
                <p>${element}</p>
            </div>
        `;
  }
});

sabado.forEach((element, index) => {
  if (element === 0) {
    divColSab.innerHTML += `
            <div class="vazio">

            </div>
        `;
  } else {
    divColSab.innerHTML += `
            <div class="dia">
                <p>${element}</p>
            </div>
        `;
  }
});

domingo.forEach((element, index) => {
  if (element === 0) {
    divColDom.innerHTML += `
            <div class="vazio">

            </div>
        `;
  } else {
    divColDom.innerHTML += `
            <div class="dia">
                <p>${element}</p>
            </div>
        `;
  }
});
