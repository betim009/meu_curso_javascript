const email = document.getElementById("email");
const password = document.getElementById("senha");
const form = document.getElementById("loginForm");

const usuarios = [
  {
    id: 1,
    email: "admin@email.com",
    senha: "admin",
    telefone: "(11) 91234-5678",
  },
  {
    id: 2,
    email: "joao.souza@email.com",
    senha: "minhasenha",
    telefone: "(21) 99876-5432",
  },
  {
    id: 3,
    email: "maria.lima@email.com",
    senha: "12345678",
    telefone: "(31) 98765-4321",
  },
  {
    id: 4,
    email: "carlos.pereira@email.com",
    senha: "segura123",
    telefone: "(41) 99999-8888",
  },
  {
    id: 5,
    email: "juliana.oliveira@email.com",
    senha: "teste@2025",
    telefone: "(51) 91111-2222",
  },
];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailValor = email.value;
  const passwordValor = password.value;

  const verificLogin = usuarios.find(
    (element) => element.email === emailValor && element.senha === passwordValor
  );

  if (verificLogin) {
    window.location.href = "../../../index.html"

  } else {
    alert("Não foi possível fazer login verifique email e senha")
  }

   
});
