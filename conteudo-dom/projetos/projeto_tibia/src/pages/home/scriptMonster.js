import { monsters } from "./mocks/monsters.js";

const liMonsters = document.getElementById('li-monsters');
const contentResult = document.getElementById('content-result');

liMonsters.addEventListener('click', () => {
    contentResult.innerHTML = '';
    contentResult.innerHTML += `
        <table class="table table-warning">
            <thead>
                <tr> 
                    <th>
                        <h6>Monstro</h6>
                    </th>
                    <th>
                        <h6>Nome</h6>
                    </th>
                </tr>
            </thead>
            <tbody id="tbody-escudo">
            </tbody>
        </table>
    `
    const tbodyEscudo = document.getElementById('tbody-escudo');
    monsters.map((e, i) => (
        tbodyEscudo.innerHTML += `
            <tr>
                <td class="dialog-img">
                    <img class="img-60" src="${e.img}" />
                </td>
                <td>
                    <p>${e.name}</p>
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
                <img class="img-modal" src="${monsters[index].img}" />
            `
        })
    });
    closeModal.addEventListener('click', () => modalImg.close())
})
