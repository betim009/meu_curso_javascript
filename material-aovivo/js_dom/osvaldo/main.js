/* 
    # JS introducao
    1. Tipos de dados
    2. Condicoes
    3. Repeticoes
    4. Funcoes
    # Js DOM
    5. Seletores
    6. Criacao
    7. Eventos 
*/

window.addEventListener("load", () => {
    const inputEmail = document.getElementById("email");
    const btnEnviar = document.getElementById("enviar");
    const divResultado = document.getElementById("resultado");


    btnEnviar.addEventListener("click", () => {
        divResultado.innerHTML += `
            <p>${inputEmail.value}</p>
        `
    });
});
