let gatos = [];

function cadastrar_Gato(){
  let gato = {
    nome: document.getElementById("nome_gato").value,
    descricao: document.getElementById("descricao_gato").value,
    imagem: document.getElementById("file-upload").value,
    sexo: document.querySelector('input[name="sexo"]:checked').value
  }

  gatos.push(gato)
  localStorage.setItem("gatos", JSON.stringify(gatos));

  let elemento = document.getElementsByClassName("lista-gatos")

  let card = document.createElement("div");

}
