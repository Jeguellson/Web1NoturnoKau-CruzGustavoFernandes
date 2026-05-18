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




function cadastrar_Gato(event) {
  event.preventDefault();
  // 1. Captura os elementos HTML (para aplicar as classes CSS neles ou nos pais)
  const inputNome = document.getElementById("nome_gato");
  const inputRaca = document.getElementById("raca_gato");
  const inputIdade = document.getElementById("idadeGato");

  // Captura os containers pai (.textfield) para aplicar o visual do CSS M3
  const containerNome = document.getElementById("container-nome-gato");
  const containerRaca = document.getElementById("container-raca-gato");
  const containerIdade = document.getElementById("container-idade-gato");

  // Elementos do Sexo
  const chkMasculino = document.getElementById("sexo_m");
  const chkFeminino = document.getElementById("sexo_f");
  const legendaSexo = document.getElementById("legenda-sexo-titulo");

  let error = false;

<<<<<<< Updated upstream
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
=======
  const sexoSelecionado = document.querySelector('input[name="sexo"]:checked');

  if (inputNome.value.trim() === "") {
    containerNome.classList.add('is-invalid');
    containerNome.classList.remove('is-valid');
    formularioValido = false;
  } else {
    containerNome.classList.remove('is-invalid');
    containerNome.classList.add('is-valid');
  }
  if (inputRaca.value.trim() === "") {
    containerRaca.classList.add('is-invalid');
    containerRaca.classList.remove('is-valid');
    formularioValido = false;
  } else {
    containerRaca.classList.remove('is-invalid');
    containerRaca.classList.add('is-valid');
>>>>>>> Stashed changes
  }

  if (inputIdade.value.trim() === "" || parseInt(inputIdade.value) < 0) {
    containerIdade.classList.add('is-invalid');
    containerIdade.classList.remove('is-valid');
    formularioValido = false;
  } else {
    containerIdade.classList.remove('is-invalid');
    containerIdade.classList.add('is-valid');
  }

  let sexoValor = "";
  if (!chkMasculino.checked && !chkFeminino.checked) {
    legendaSexo.style.color = "var(--m3-error)";
    formularioValido = false;
  } else {
    legendaSexo.style.color = "var(--m3-on-surface)";
    sexoValor = chkMasculino.checked ? "M" : "F";
  }

  if (!formularioValido) {
    return;
  }

  let gato = {
    nome: inputNome.value.trim(),
    raca: inputRaca.value.trim(),
    sexo: sexoValor,
    idade: inputIdade.value,
  };

  // Lógica de Edição ou Novo Cadastro que você já tinha feito
  if (indiceEditando === -1) {
    gatos.push(gato);
  } else {
    gatos[indiceEditando] = gato;
    indiceEditando = -1;
  }

  // Atualiza LocalStorage e a Tela
  localStorage.setItem("gatos", JSON.stringify(gatos));
  renderizarTabela();
  
  // Limpa o formulário e remove os efeitos verdes de sucesso pós-envio
  document.querySelector(".formGato").reset();
  containerNome.classList.remove('is-valid');
  containerRaca.classList.remove('is-valid');
  containerIdade.classList.remove('is-valid');
  
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
