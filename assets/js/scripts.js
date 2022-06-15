const tarefas = [
  { texto: "Adicione uma tarefa no botão acima ☝️", status: "em andamento" },
  {
    texto: "Passe o mouse na tarefa para ver o botão excluir 🗑️",
    status: "em andamento"
  },
  {
    texto: "Clique na tarefa para marca-la como feita ✔️",
    status: "em andamento",
    img: "src/img/naruto.jpg"
  }
];

function selecionarTodas() {
  const lista = document.querySelectorAll("li");

  let cont = 0;
  while (cont < lista.length) {
    console.log(lista[cont]);
    lista[cont].classList.add("finalizada");
    cont++;
  }
}

function finalizarTarefa(elemento) {
  console.log(elemento.innerHTML);

  for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].texto === elemento.innerHTML) {
      tarefas[i].status = "feito";
    }
  }
  if (elemento.parentNode.classList.contains("finalizada")) {
    elemento.parentNode.classList.remove("finalizada");
  } else {
    elemento.parentNode.classList.add("finalizada");
  }
  atualizarTarefas();
}

function atualizarTarefas() {
  const lista = document.querySelector("ul");

  lista.innerHTML = "";
  for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].status === "feito") {
      lista.innerHTML += `
          <li class="finalizada">
              <div class="btn-delete" onclick="deletarTarefa(this)">
                  <ion-icon name="trash-outline"></ion-icon>
              </div>
              <span onclick="finalizarTarefa(this)">${tarefas[i].texto}</span>
          </li>
      `;
    } else {
      lista.innerHTML += `
          <li>
              <div class="btn-delete" onclick="deletarTarefa(this)">
                  <ion-icon name="trash-outline"></ion-icon>
              </div>
              <span onclick="finalizarTarefa(this)">${tarefas[i].texto}</span>
          </li>
      `;
    }
  }
  atualizarContador();
}

function atualizarContador() {
  let contador = tarefas.length;
  for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].status === "feito") {
      contador--;
    }
  }
  document.querySelector(".header h1").innerHTML = `To-do List (${contador})`;
}

function adicionarTarefa() {
  const tarefa = {
    texto: document.querySelector("input").value,
    status: "em andamento"
  };

  tarefas.push(tarefa);
  atualizarTarefas();
}

function showAlert() {
  document.querySelector(".bottom").classList.toggle("show-alert");
}

function deletarTarefa(elemento) {
  console.log(elemento);
  elemento.parentNode.classList.add("remove");
  setTimeout(function () {
    elemento.parentNode.remove();
  }, 700);
}

atualizarTarefas();
setInterval(showAlert, 5000);
