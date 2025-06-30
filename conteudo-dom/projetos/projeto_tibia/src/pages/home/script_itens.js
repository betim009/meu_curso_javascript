import { shields } from "./mocks/shields.js";

const liEscudos = document.getElementById('li-escudos');
const contentResult = document.getElementById('content-result');


liEscudos.addEventListener('click', () => {
    alert('')
    console.log(contentResult)
    contentResult.innerHTML = '';
    contentResult.innerHTML = "OI"
    contentResult.innerHTML += `
        <table class="table table-warning">
            <thead>
                <tr> 
                    <th>
                        <h6>Imagem</h6>
                    </th>
                    <th>
                        <h6>Nome</h6>
                    </th>
                    <th>
                        <h6>Defesa</h6>
                    </th>
                </tr>
            </thead>
            <tbody id="tbody-escudo">
            </tbody>
        </table>
    `
    const tbodyEscudo = document.getElementById('tbody-escudo');
    shields.map((e, i) => (
        tbodyEscudo.innerHTML += `
            <tr>
                <td class="dialog-img">
                    <img class="img-60" src="${e.imagem}" />
                </td>
                <td>
                    <p>${e.nome}</p>
                </td>
                <td>
                    <p>${e.defesa}</p>
                </td>
            </tr>
        `
    ))

    contentResult.innerHTML += `
        <dialog id="modal-img">
            <div class="modal-header">
                <button id="close-modal">Fechar</button>
            </div>
            <div id="modal-body">

            </div>
        </dialog>
    `;

    const modalImg = document.getElementById('modal-img');
    const closeModal = document.getElementById('close-modal');
    const modalBody = document.getElementById('modal-body');

    const dialogImg = document.querySelectorAll('.dialog-img')
    dialogImg.forEach((img, index) => {
        img.addEventListener('click', () => {
            modalImg.showModal();
            modalBody.innerHTML = `
                <img class="img-modal" src="${shields[index].imagem}" />
            `
        })
    });
    closeModal.addEventListener('click', () => modalImg.close())
})





