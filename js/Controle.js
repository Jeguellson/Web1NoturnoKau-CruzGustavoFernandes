let gatos = JSON.parse(localStorage.getItem("gatos")) || [];

let indiceEditando = -1;

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
  document.getElementById("descricao_gato").value = gato.descricao;
  document.getElementById("idadeGato").value = gato.idade;
  document.querySelector(`input[name="sexo"][value="${gato.sexo}"]`).checked = true;
  document.getElementById("observacao").value = gato.observacao;

  indiceEditando = i; // só guarda qual linha está sendo editada
}





function renderizarTabela() {
  const tabela = document.getElementById("tabela-gatos");

  tabela.innerHTML = `
    <tr>
      <th>Nome</th>
      <th>Descrição</th>
      <th>Sexo</th>
      <th>Idade</th>
      <th>Observação</th>
      <th>Ações</th>
    </tr>
  `;

  let gatosSalvos = JSON.parse(localStorage.getItem("gatos")) || [];

  gatosSalvos.forEach((gato, i) => {
    let linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${gato.nome}</td>
      <td>${gato.descricao}</td>
      <td>${gato.sexo}</td>
      <td>${gato.idade}</td>
      <td>${gato.observacao}</td>
      <td>
        <button class="btn-alterar" onclick="alterarGato(${i})">Alterar</button>
        <button class="btn-excluir" onclick="excluirGato(${i})">Excluir</button>
      </td>
    `;
    tabela.appendChild(linha);
  });
}





function cadastrar_Gato(event) {
  event.preventDefault();

  const nome = document.getElementById("nome_gato").value;
  const descricao = document.getElementById("descricao_gato").value;
  const sexoSelecionado = document.querySelector('input[name="sexo"]:checked');
  const idade = document.getElementById("idadeGato").value;
  const observacao = document.getElementById("observacao").value;


    if (nome === "") {
      alert("Insira o nome do gato!")
      return;
    }

    if (descricao === "") {
      alert("Insira a descrição do gato!")
      return;
    }

    if (!sexoSelecionado) {
      alert("Selecione o sexo do gato!");
      return;
    }

    let gato = {
      nome: nome,
      descricao: descricao,
      sexo: sexoSelecionado.value,
      idade: idade,
      observacao: observacao,
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
