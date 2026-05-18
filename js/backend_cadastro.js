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

  document.addEventListener("keydown", function (event) {
    const inputNome = document.getElementById("textfield-inputUsuario");
    const inputSenha = document.getElementById("textfield-input");

    if (!inputNome || !inputSenha) return;

    if (event.key === "Enter") {
      cadastrar(inputNome.value, inputSenha.value);
    }
    if (event.code === "Backspace") {
      sair();
    }
  });
});

function salvarDados(nome) {
  sessionStorage.setItem("status", "true");
  sessionStorage.setItem("usuario", nome);
}

function cookies() {
  document.cookie = "logado=true; max-age=3600; path=/";
}

function sair() {
  sessionStorage.clear();
  document.cookie.split(";").forEach(function (c) {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
}

function cadastrar(nome, senha) {
  
  const containerUsuario = document.getElementById("textfield-containerUsuario");
  const containerSenha = document.getElementById("textfield-containerSenha");
  error = false;
  if (nome.trim() === "") {
    containerUsuario.classList.add('is-invalid');
    containerUsuario.classList.remove('is-valid');
    error = true;

  } else {
    containerUsuario.classList.remove('is-invalid');
    containerUsuario.classList.add('is-valid');
  }

  if (senha === "") {
    containerSenha.classList.add('is-invalid');
    containerSenha.classList.remove('is-valid');
    error = true;

  } else {
    containerSenha.classList.remove('is-invalid');
    containerSenha.classList.add('is-valid');

  }


  if (document.getElementById("lembrarMe").checked) {
    localStorage.setItem("lembrarMe", "true");
  } else {
    localStorage.removeItem("lembrarMe");
  }
  if (error) {
    return;
  }
  cookies();
  salvarDados(nome);
  alert("Você logou com sucesso!");
  window.location.href = "TelaPrincipal.html";
}

const detalhes = document.getElementById("details-description");
const summary = document.getElementById("sumario");

const textoOriginal = summary.textContent;

detalhes.addEventListener("toggle", function () {
  summary.textContent = this.open
    ? "Fechar informações"
    : textoOriginal;
});
