function showMessage(msg, isSuccess = false) {
  const message = document.getElementById('message');
  message.textContent = msg;
  message.style.color = isSuccess ? '#198754' : '#ff6b6b';
  message.style.fontWeight = '500';
  message.style.display = 'block';
  setTimeout(() => {
    message.textContent = '';
    message.style.display = 'none';
  }, 3000);
}

function createAccount(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Criando array accounts dentro do localStorage
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // Objeto que vai ser passado dentro do localStorage
    const account = {
        email: email,
        password: password
    };

    // Adicionando objeto dentro do array
    accounts.push(account);

    // Colocando valor dentro do localStorage
    localStorage.setItem("accounts", JSON.stringify(accounts));

    // Mensagem de sucesso
    showMessage("Conta Criada com Sucesso!", true);
}
