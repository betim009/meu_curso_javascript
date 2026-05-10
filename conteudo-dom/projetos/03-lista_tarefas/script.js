const campoTarefa = document.getElementById("campo-tarefa");
const btnAdicionar = document.getElementById("btn-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");
const contador = document.getElementById("contador");

function atualizarContador() {
  const pendentes = listaTarefas.querySelectorAll(".tarefa:not(.concluida)").length;
  contador.textContent = `${pendentes} tarefa(s) pendente(s)`;
}

function criarItemTarefa(texto) {
  const li = document.createElement("li");
  li.className = "tarefa";

  const span = document.createElement("span");
  span.className = "texto-tarefa";
  span.textContent = texto;

  span.addEventListener("click", function() {
    li.classList.toggle("concluida");
    atualizarContador();
  });

  const btnRemover = document.createElement("button");
  btnRemover.className = "btn-remover";
  btnRemover.textContent = "×";
  btnRemover.setAttribute("title", "Remover tarefa");

  btnRemover.addEventListener("click", function() {
    li.remove();
    atualizarContador();
  });

  li.appendChild(span);
  li.appendChild(btnRemover);

  return li;
}

function adicionarTarefa() {
  const texto = campoTarefa.value.trim();

  if (texto === "") {
    alert("Digite uma tarefa antes de adicionar!");
    return;
  }

  const item = criarItemTarefa(texto);
  listaTarefas.appendChild(item);

  campoTarefa.value = "";
  campoTarefa.focus();

  atualizarContador();
}

btnAdicionar.addEventListener("click", adicionarTarefa);

campoTarefa.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    adicionarTarefa();
  }
});
