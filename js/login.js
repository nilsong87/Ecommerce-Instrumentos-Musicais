function fazerLogin(email, senha) {
    const usuariosCadastrados = [
        { email: "usuario@example.com", senha: "123456" }
    ];

    const usuarioValido = usuariosCadastrados.find(
        usuario => usuario.email === email && usuario.senha === senha
    );

    if (usuarioValido) {
        window.location.href = "perfil.html";
    } else {
        alert("E-mail ou senha incorretos. Tente novamente.");
    }
}

document.getElementById('form-login').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-senha').value;

    fazerLogin(email, senha);
});

document.getElementById('form-cadastro').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const novoUsuario = { nome, email, senha };
    alert("Cadastro realizado com sucesso!");
    fecharModal();
});