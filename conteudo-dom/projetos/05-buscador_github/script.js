const campoBusca = document.getElementById("campo-usuario");
const btnBuscar = document.getElementById("btn-buscar");
const estadoEl = document.getElementById("estado");
const perfilEl = document.getElementById("perfil");

function mostrarEstado(mensagem, tipo) {
  perfilEl.classList.add("oculto");
  estadoEl.textContent = mensagem;
  estadoEl.className = "estado " + tipo;
  estadoEl.classList.remove("oculto");
}

function mostrarPerfil(usuario) {
  estadoEl.classList.add("oculto");

  document.getElementById("avatar").src = usuario.avatar_url;
  document.getElementById("avatar").alt = "Foto de " + usuario.login;
  document.getElementById("nome-usuario").textContent = usuario.name || usuario.login;
  document.getElementById("bio").textContent = usuario.bio || "Sem bio disponível.";
  document.getElementById("repos").textContent = usuario.public_repos;
  document.getElementById("seguidores").textContent = usuario.followers;
  document.getElementById("seguindo").textContent = usuario.following;
  document.getElementById("link-perfil").href = usuario.html_url;

  perfilEl.classList.remove("oculto");
}

async function buscarUsuario() {
  const username = campoBusca.value.trim();

  if (username === "") {
    mostrarEstado("Digite um username para buscar.", "erro");
    return;
  }

  btnBuscar.disabled = true;
  mostrarEstado("Buscando...", "carregando");

  try {
    const resposta = await fetch("https://api.github.com/users/" + username);

    if (resposta.status === 404) {
      mostrarEstado('Usuário "' + username + '" não encontrado no GitHub.', "erro");
      return;
    }

    if (!resposta.ok) {
      mostrarEstado("Erro ao buscar. Tente novamente em alguns instantes.", "erro");
      return;
    }

    const usuario = await resposta.json();
    mostrarPerfil(usuario);

  } catch (erro) {
    mostrarEstado("Sem conexão com a internet. Verifique sua rede.", "erro");
    console.error(erro);
  } finally {
    btnBuscar.disabled = false;
  }
}

btnBuscar.addEventListener("click", buscarUsuario);

campoBusca.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    buscarUsuario();
  }
});
