document.addEventListener("DOMContentLoaded", function () {

    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    const boasVindas = document.getElementById("boasVindas");
    const itemLogin = document.getElementById("itemLogin");
    const itemLogout = document.getElementById("itemLogout");
    const logoutBtn = document.getElementById("logoutBtn");

    if (usuario) {

        // Mostrar mensagem
        boasVindas.style.display = "block";
        boasVindas.textContent = "Bem-vindo, " + usuario.nome;

        // Esconder login
        itemLogin.style.display = "none";

        // Mostrar logout
        itemLogout.style.display = "block";
    }

    // Evento logout
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (e) {
            e.preventDefault();

            localStorage.removeItem("usuarioLogado");

            window.location.href = "index.html";
        });
    }

});
