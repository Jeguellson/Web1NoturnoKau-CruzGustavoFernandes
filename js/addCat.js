let gatos = JSON.parse(localStorage.getItem("gatos")) || [];

function cadastrar_Gato(event) {
  event.preventDefault();

  const nome = document.getElementById("nome_gato").value;
  const descricao = document.getElementById("descricao_gato").value;
  const sexoSelecionado = document.querySelector('input[name="sexo"]:checked');

  if (!sexoSelecionado) {
    alert("Selecione o sexo do gato!");
    return;
  }

  const fileInput = document.getElementById("file-upload");
  const file = fileInput.files[0];

  if (!file) {
    alert("Selecione uma imagem!");
    return;
  }

  const reader = new FileReader();

  reader.onload = function () {
    let gato = {
      nome: nome,
      descricao: descricao,
      sexo: sexoSelecionado.value,
      imagem: reader.result //  base64
    };

    gatos.push(gato);
    localStorage.setItem("gatos", JSON.stringify(gatos));

    alert("Gato cadastrado com sucesso!");


  
  };

  reader.readAsDataURL(file);
}


document.getElementById("formGato").addEventListener("submit", cadastrar_Gato);