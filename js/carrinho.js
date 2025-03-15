const carrinho = [];

const tabelaFrete = {
    "01000-000": 15.00,
    "20000-000": 20.00,
    "30000-000": 25.00,
    "40000-000": 30.00,
    "50000-000": 35.00
};


function calcularFrete() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    const freteValorElement = document.getElementById('frete-valor');


    if (tabelaFrete[cep]) {
        freteValorElement.textContent = `Frete: R$ ${tabelaFrete[cep].toFixed(2)}`;
    } else {
        freteValorElement.textContent = "Frete não disponível para este CEP.";
    }

    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoQuantidade = document.getElementById('carrinho-quantidade');
    const listaCarrinho = document.getElementById('lista-carrinho');
    const desconto = calcularDesconto();
    const cep = document.getElementById('cep').value;
    let frete = tabelaFrete[cep] || 0;

    carrinhoQuantidade.innerText = carrinho.length;
    listaCarrinho.innerHTML = '';

    let total = 0;

    carrinho.forEach((item, index) => {
        const subtotal = item.quantidade * item.preco;
        total += item.selecionado ? subtotal : 0;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.nome}</td>
            <td>
                <input type="number" value="${item.quantidade}" min="1" onchange="atualizarQuantidade(${index}, this.value)">
            </td>
            <td>R$ ${item.preco.toFixed(2)}</td>
            <td>R$ ${subtotal.toFixed(2)}</td>
            <td>
                <input type="checkbox" ${item.selecionado ? 'checked' : ''} onchange="selecionarItem(${index}, this.checked)">
                <button onclick="removerItem(${index})">Remover</button>
            </td>
        `;
        listaCarrinho.appendChild(tr);
    });


    const freteValorElement = document.getElementById('frete-valor');
    freteValorElement.textContent = `Frete: R$ ${frete.toFixed(2)}`;

    document.getElementById('desconto').innerText = `R$ ${desconto.toFixed(2)}`;
    document.getElementById('total-valor').innerText = `R$ ${(total + frete - desconto).toFixed(2)}`;
}

function atualizarQuantidade(index, quantidade) {
    carrinho[index].quantidade = parseInt(quantidade);
    atualizarCarrinho();
}

function removerItem(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function calcularDesconto() {
    return 10.00;
}

function selecionarItem(index, selecionado) {
    carrinho[index].selecionado = selecionado;
    atualizarCarrinho();
}

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.");
        return;
    }

    const total = parseFloat(document.getElementById('total-valor').innerText.replace("R$ ", ""));
    alert(`Compra finalizada com sucesso! Total: R$ ${total.toFixed(2)}`);
    carrinho.length = 0;
    atualizarCarrinho();
}

document.getElementById('login-btn').addEventListener('click', function () {
    document.getElementById('login-cadastro-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('login-cadastro-modal').style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('login-cadastro-modal')) {
        document.getElementById('login-cadastro-modal').style.display = 'none';
    }
});

function openTab(event, tabName) {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => link.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    event.currentTarget.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

document.querySelector('.menu-icon').addEventListener('click', function () {
    const navUl = document.querySelector('nav ul');
    navUl.classList.toggle('active');
});

atualizarCarrinho();