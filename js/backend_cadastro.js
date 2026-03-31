

//TODO: salvar cookies localmente e utilizar sessionStorage para ficar status logado

const inputEmail = document.getElementById('inputEmail');
const inputSenha = document.getElementById('inputSenha');
const labelTestes = document.getElementById('testDebug');

if (sessionStorage.getItem("status") === "true") {
    document.getElementById("statusLabel").textContent = "Ativo"
    document.getElementById("statusIcon").checked = true;
}

document.addEventListener('keydown', function (event) {

    if (event.key === 'Enter') {
        const valorSenha = inputSenha.value;
        const valorEmail = inputEmail.value;



        cadastrar(valorEmail, valorSenha)
    }
    if (event.code === 'Backspace') {



        sair()

    }
});

function salvarDados() {
    sessionStorage.setItem('status', true);
}
function cookies() {
    document.cookie = "nome=valor; max-age=60; path=/"
}

function sair() {
    sessionStorage.clear();
    document.cookie.split(";").forEach(function (c) {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
}

function cadastrar(email, senha) {
    document.getElementById('testDebug').textContent = "Usuario: " + email + " Senha: " + senha;
    cookies();
    salvarDados();
    
    window.location.href = "TelaPrincipal.html";
}