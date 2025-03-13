
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

    window.location.href = "/home.html";
}

document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    fazerLogoff();
});

function editarPerfil() {
    abrirModal('modal-editar-perfil');
    document.getElementById('nome').value = document.getElementById('nome-usuario').innerText;
    document.getElementById('email').value = document.getElementById('email-usuario').innerText;
    document.getElementById('telefone').value = document.getElementById('telefone-usuario').innerText;
}

document.getElementById('form-editar-perfil').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('nome-usuario').innerText = document.getElementById('nome').value;
    document.getElementById('email-usuario').innerText = document.getElementById('email').value;
    document.getElementById('telefone-usuario').innerText = document.getElementById('telefone').value;
    fecharModal();
});

function editarFoto() {
    abrirModal('modal-alterar-foto');
}

document.getElementById('foto-perfil-input').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {

            document.getElementById('foto-perfil').src = e.target.result;

            localStorage.setItem('fotoPerfil', e.target.result);
        };
        reader.readAsDataURL(file);
    }
});

window.addEventListener('load', function () {
    const fotoPerfilSalva = localStorage.getItem('fotoPerfil');
    if (fotoPerfilSalva) {
        document.getElementById('foto-perfil').src = fotoPerfilSalva;
    }
});

document.getElementById('form-alterar-foto').addEventListener('submit', function (e) {
    e.preventDefault();
    fecharModal();
    alert("Foto alterada com sucesso!");
});

function adicionarEndereco() {
    abrirModal('modal-endereco');
    document.getElementById('titulo-endereco').innerText = "Adicionar Endereço";
    document.getElementById('form-endereco').reset();
}

function editarEndereco(id) {
    abrirModal('modal-endereco');
    document.getElementById('titulo-endereco').innerText = "Editar Endereço";
    const endereco = {
        cep: "12345-678",
        rua: "Rua Exemplo",
        numero: "123",
        cidade: "São Paulo",
        estado: "SP"
    };
    document.getElementById('cep').value = endereco.cep;
    document.getElementById('rua').value = endereco.rua;
    document.getElementById('numero').value = endereco.numero;
    document.getElementById('cidade').value = endereco.cidade;
    document.getElementById('estado').value = endereco.estado;
}

function removerEndereco(id) {
    if (confirm("Tem certeza que deseja remover este endereço?")) {
        console.log(`Endereço ${id} removido.`);
    }
}

document.getElementById('form-endereco').addEventListener('submit', function (e) {
    e.preventDefault();
    const endereco = {
        cep: document.getElementById('cep').value,
        rua: document.getElementById('rua').value,
        numero: document.getElementById('numero').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value
    };
    console.log("Endereço salvo:", endereco);
    fecharModal();
});

function adicionarPagamento() {
    abrirModal('modal-pagamento');
    document.getElementById('titulo-pagamento').innerText = "Adicionar Forma de Pagamento";
    document.getElementById('form-pagamento').reset();
}

function editarPagamento(id) {
    abrirModal('modal-pagamento');
    document.getElementById('titulo-pagamento').innerText = "Editar Forma de Pagamento";
    const pagamento = {
        numeroCartao: "**** **** **** 1234",
        validade: "12/25",
        cvv: "123"
    };
    document.getElementById('numero-cartao').value = pagamento.numeroCartao;
    document.getElementById('validade').value = pagamento.validade;
    document.getElementById('cvv').value = pagamento.cvv;
}

function removerPagamento(id) {
    if (confirm("Tem certeza que deseja remover esta forma de pagamento?")) {
        console.log(`Forma de pagamento ${id} removida.`);
    }
}

document.getElementById('form-pagamento').addEventListener('submit', function (e) {
    e.preventDefault();
    const pagamento = {
        numeroCartao: document.getElementById('numero-cartao').value,
        validade: document.getElementById('validade').value,
        cvv: document.getElementById('cvv').value
    };
    console.log("Forma de pagamento salva:", pagamento);
    fecharModal();
});

function verDetalhesCompra(id) {
    console.log(`Detalhes da compra ${id}`);
}