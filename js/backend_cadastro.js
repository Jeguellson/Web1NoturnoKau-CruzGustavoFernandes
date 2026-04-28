document.addEventListener("DOMContentLoaded", function () {


  if (document.getElementById("lembrarMe")) {
    if (localStorage.getItem("lembrarMe") === "true") {
      document.getElementById("lembrarMe").checked = true;
    }
  }

  if (sessionStorage.getItem("status") === "true") {
    const nome = sessionStorage.getItem("usuario");

    if (document.getElementById("statusLabel"))
      document.getElementById("statusLabel").textContent = "Ativo";
    if (document.getElementById("statusIcon"))
      document.getElementById("statusIcon").checked = true;
    if (document.getElementById("status-value"))
      document.getElementById("status-value").textContent = nome;
    if (document.getElementById("pata"))
      document.getElementById("pata").src = "../img/iconePataVerde.png";
  }

  document.addEventListener('keydown', function (event) {
    const inputNome = document.getElementById('inputNome');
    const inputSenha = document.getElementById('inputSenha');

    if (!inputNome || !inputSenha) return;

    if (event.key === 'Enter') {
      cadastrar(inputNome.value, inputSenha.value);
    }
    if (event.code === 'Backspace') {
      sair();
    }
  });
});

function salvarDados(nome) {
  sessionStorage.setItem('status', 'true');
  sessionStorage.setItem('usuario', nome);
}

function cookies() {
  document.cookie = "logado=true; max-age=3600; path=/";
}

function sair() {
  sessionStorage.clear();
  document.cookie.split(";").forEach(function (c) {
    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
}

function cadastrar(nome, senha) {
  if (nome === "" || senha === "") {
    alert("Preencha os campos meu rei!");
    return;
  }

  if (document.getElementById("lembrarMe").checked) {
    localStorage.setItem("lembrarMe", "true");
  } else {
    localStorage.removeItem("lembrarMe");
  }

  cookies();
  salvarDados(nome);
  alert("Você logou com sucesso!");
  window.location.href = "TelaPrincipal.html";
}


