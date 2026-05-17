let gatos = JSON.parse(localStorage.getItem("gatos")) || [];

let indiceEditando = -1;
let ordemNomeAsc = true;


function excluirGato(i) {
  let gatosSalvos = JSON.parse(localStorage.getItem("gatos")) || [];

  gatosSalvos.splice(i, 1);
  gatos = gatosSalvos;
  localStorage.setItem("gatos", JSON.stringify(gatos));
  renderizarTabela()
}



function alterarGato(i) {
  let gatosSalvos = JSON.parse(localStorage.getItem("gatos")) || [];
  const gato = gatosSalvos[i];

  document.getElementById("nome_gato").value = gato.nome;
  document.getElementById("raca_gato").value = gato.raca;
  document.getElementById("idadeGato").value = gato.idade;
  document.querySelector(`input[name="sexo"][value="${gato.sexo}"]`).checked = true;

  indiceEditando = i;
}





function renderizarTabela() {
  const tabela = document.getElementById("tabela-gatos");

  tabela.innerHTML = `
    <tr>
      <th id="th-nome">
        <button type="button" class="btn-ordenar" onclick="ordenarPorNome()">
          Nome <span class="seta-ordenacao">▲</span>
        </button>
      </th>
      <th>Raça</th>
      <th>Sexo</th>
      <th>Idade</th>
      <th>Ações</th>
    </tr>
  `;

  let gatosSalvos = JSON.parse(localStorage.getItem("gatos")) || [];

  gatosSalvos.forEach((gato, i) => {
    let linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${gato.nome}</td>
      <td>${gato.raca}</td>
      <td>${gato.sexo}</td>
      <td>${gato.idade}</td>
      <td>
        <button class="btn-alterar" onclick="alterarGato(${i})">Alterar</button>
        <button class="btn-excluir" onclick="excluirGato(${i})">Excluir</button>
      </td>
    `;
    tabela.appendChild(linha);
  });
}


function abrirMenu() {
  document.getElementById('menu').classList.add('aberto');
  document.getElementById('scrim').classList.add('ativo');
  document.body.style.overflow = 'hidden';
}

function fecharMenu() {
  document.getElementById('menu').classList.remove('aberto');
  document.getElementById('scrim').classList.remove('ativo');
  document.body.style.overflow = '';
}




function ordenarPorNome() {
  gatos.sort((a, b) => {
    if (ordemNomeAsc) {
      return a.nome.localeCompare(b.nome);
    } else {
      return b.nome.localeCompare(a.nome);
    }
  });

  ordemNomeAsc = !ordemNomeAsc;
  localStorage.setItem("gatos", JSON.stringify(gatos));
  renderizarTabela();
}





function cadastrar_Gato(event) {
  event.preventDefault();

  const nome = document.getElementById("nome_gato").value;
  const raca = document.getElementById("raca_gato").value;
  const sexoSelecionado = document.querySelector('input[name="sexo"]:checked');
  const idade = document.getElementById("idadeGato").value;

    if (nome === "") {
      alert("Insira o nome do gato!")
      return;
    }

    if (raca === "") {
      alert("Insira a raça do gato!")
      return;
    }

    if (!sexoSelecionado) {
      alert("Selecione o sexo do gato!");
      return;
    }

    let gato = {
      nome: nome,
      raca: raca,
      sexo: sexoSelecionado.value,
      idade: idade,
    };

    if (indiceEditando === -1) {
      gatos.push(gato);

    } else {

      gatos[indiceEditando] = gato;
      indiceEditando = -1;
    }

  localStorage.setItem("gatos", JSON.stringify(gatos));
  renderizarTabela();
  alert("Gato cadastrado com sucesso!");
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderizarTabela();
  });

  document.querySelector(".formGato").addEventListener("submit", cadastrar_Gato);

  document.addEventListener("DOMContentLoaded", function () {
    const listar = document.getElementById("listar");

    listar.addEventListener("click", function () {
      renderizarTabela();
    });
});

  document.addEventListener("DOMContentLoaded", function () {


    if (sessionStorage.getItem("status") === "true") {
      const nome = sessionStorage.getItem("usuario");
      document.getElementById("status-value").textContent = "Logado";
      document.getElementById("pata").src = "https://cdn-icons-png.flaticon.com/512/190/190411.png"; // patinha verde temporária
    }

  });
