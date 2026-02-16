const form = document.getElementById("loginForm");

// Dados mockados
const usuarioMockado = {
    email: "patrick@email.com",
    senha: "123456",
    nome: "Patrick"
};

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirmarSenha");

    const erroEmail = email.nextElementSibling;
    const erroSenha = senha.nextElementSibling;
    const erroConfirmar = confirmarSenha.nextElementSibling;

    let valido = true;

    // Limpa erros
    erroEmail.textContent = "";
    erroSenha.textContent = "";
    erroConfirmar.textContent = "";

    // Validação e-mail
    if (email.value.trim() === "") {
        erroEmail.textContent = "O e-mail é obrigatório.";
        valido = false;
    }

    // Validação senha
    if (senha.value.trim() === "") {
        erroSenha.textContent = "A senha é obrigatória.";
        valido = false;
    } else if (senha.value.length < 6) {
        erroSenha.textContent = "A senha deve ter pelo menos 6 caracteres.";
        valido = false;
    }

    // Confirmar senha
    if (confirmarSenha.value !== senha.value) {
        erroConfirmar.textContent = "As senhas não coincidem.";
        valido = false;
    }

    // Verifica usuário mockado
    if (valido) {
        if (
            email.value === usuarioMockado.email &&
            senha.value === usuarioMockado.senha
        ) {
            // Salva no localStorage
            localStorage.setItem("usuarioLogado", JSON.stringify(usuarioMockado));

            // Redireciona
            window.location.href = "index.html";
        } else {
            erroEmail.textContent = "Usuário ou senha inválidos.";
        }
    }
});
