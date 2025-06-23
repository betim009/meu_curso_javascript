const divName = document.getElementById("name")
const divEmail = document.getElementById("email")
const divPassword = document.getElementById("password")
const divTelefone = document.getElementById("telefone")
const divButton = document.getElementById("button")

divButton.addEventListener("click", function (event) {
    event.preventDefault();

    const usuario = {
        nomeCompleto: divName.value,
        email: divEmail.value,
        password: divPassword.value,
        telefone: divTelefone.value,
    };

    localStorage.setItem('lsUsuario', JSON.stringify(usuario));
});