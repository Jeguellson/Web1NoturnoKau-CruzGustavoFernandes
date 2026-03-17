let gatosSalvos = JSON.parse(localStorage.getItem("gatos")) || [];

gatosSalvos.forEach(gato => {
  let card = document.createElement("div");
  card.innerHTML = `
    <div class="gato-card">
      <div class="img-container">
        <img src="${gato.imagem}" alt="gato">
        <div class="texto-sobreposto">${gato.nome}</div>
        <div class="descricao-overlay">${gato.descricao}</div>
      </div>
    </div>
  `;
  document.getElementById("lista-gatos").appendChild(card);
});
