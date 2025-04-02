// Função para fazer login
function fazerLogin(email, senha) {
    const usuariosCadastrados = [
        { email: "usuario@example.com", senha: "123456" }
    ];

    // Verifica se o e-mail e a senha correspondem a um usuário cadastrado
    const usuarioValido = usuariosCadastrados.find(
        usuario => usuario.email === email && usuario.senha === senha
    );

    if (usuarioValido) {
        // Redireciona para a página de perfil
        window.location.href = "perfil.html";
    } else {
        alert("E-mail ou senha incorretos. Tente novamente.");
    }
}

// Adiciona um listener para o formulário de login
document.getElementById('form-login').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos de e-mail e senha
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-senha').value;

    // Chama a função de login
    fazerLogin(email, senha);
});

// Adiciona um listener para o formulário de cadastro
document.getElementById('form-cadastro').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos de nome, e-mail e senha
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Exibe uma mensagem de sucesso
    alert("Cadastro realizado com sucesso!");

    // Fecha o modal de login/cadastro
    fecharModal();
});

// Função para fechar o modal
function fecharModal() {
    document.getElementById('login-cadastro-modal').style.display = 'none';
}