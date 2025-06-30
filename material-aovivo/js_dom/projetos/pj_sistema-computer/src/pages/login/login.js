const email = document.getElementById("email");
const password = document.getElementById("senha");
const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailValor = email.value;
  const passwordValor = password.value;

  const lsUsuario = JSON.parse(localStorage.getItem('lsUsuario'));
  console.log(lsUsuario)
  if (lsUsuario.email === emailValor && lsUsuario.password === passwordValor) {
    window.location.href = "../../../index.html"
    localStorage.setItem('id-user', "1")

  } else {
    alert('Login Inválido')
    window.location.reload();
  }
});

window.addEventListener('load', () => {
  if (localStorage.getItem('id-user')) {
    window.location.href = "../../../index.html"
  };
});