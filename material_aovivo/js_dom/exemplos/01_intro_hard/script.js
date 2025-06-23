// Imports
import { mock } from "./mock.js";

// seletores
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const btnEnviar = document.getElementById('btn');
const divContainer = document.getElementById('container');

// variaveis
let dados = {
    name: "",
    email: "",
    password: ""
}

// funções
const handleCreateMock = () => {
    mock.forEach(element => {
        divContainer.innerHTML += `
         <h4>${element}</h4>   
        `
    });
};

// eventos

inputName.addEventListener('input', ({ target }) => { // Evento de Change Input
    const { value } = target;
    dados.name = value;
});

btnEnviar.addEventListener('click', () => { // Evento de Click
    // 1 Opção: 
    // const nameValue = inputName.value;
    // const emailValue = inputEmail.value;
    // const passwordValue = inputPassword.value;

    // 2 Opção:
    const data = {
        name: inputName.value,
        email: inputEmail.value,
        password: inputPassword.value
    }

    // Verificar se name há pelo menos 1 digito (se existe)
    if (!data.name) {
        return alert('Nome inválido')
    }

    if (data.email.length < 8) {
        return alert('Email inválido')
    }

    if (data.password.length < 5) {
        return alert('Senha inválida')
    }
});

window.addEventListener('load', () => {
    mock.forEach((element) => {
        divContainer.innerHTML += `
            <h2>${element}</h2>
        ` 
    });
});