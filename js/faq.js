function fecharModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = "none";
    });
}

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', fecharModal);
});

function abrirModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function fazerLogoff() {
    localStorage.removeItem('usuarioLogado');
    sessionStorage.removeItem('token');

    window.location.href = "/index.html";
}

document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    fazerLogoff();
});

function openTab(event, tabName) {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => link.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    event.currentTarget.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

document.querySelector('#Login form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-senha').value;

    if (email === "usuario@exemplo.com" && senha === "senha123") {
        alert("Login realizado com sucesso!");
        fecharModal();
    } else {
        alert("E-mail ou senha incorretos.");
    }
});

document.getElementById('form-cadastro').addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (nome && email && senha) {
        alert("Cadastro realizado com sucesso!");
        fecharModal();
    } else {
        alert("Preencha todos os campos.");
    }
});

document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('active');
});

new window.VLibras.Widget('https://vlibras.gov.br/app');