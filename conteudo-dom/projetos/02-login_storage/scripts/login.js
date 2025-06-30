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

function validateLogin(event) {
  event.preventDefault();

  // inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // localStorage
  const accounts = JSON.parse(localStorage.getItem("accounts"));

  // Se Houver cadastro no localStorage
  if (accounts) {
    // Verificando se os inputs estão corretos
    const account = accounts.find((e) => {
      return e.email === email && e.password === password;
    });

    if (account) {
      showMessage("Login foi um sucesso!", true);
      setTimeout(() => {
        window.location.href = "home.html";
      }, 1200);
      return;
    } else {
      showMessage("Login Inválido!");
    }

  } else {
    showMessage("Sem Valores no LocalStorage");
  }
}
