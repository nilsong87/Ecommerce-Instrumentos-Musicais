let currentSlide = 0;
const carrinho = [];

function moveSlide(n) {
    const slides = document.querySelectorAll('.lista-produtos .produto');
    const totalSlides = slides.length;
    const visibleSlides = 3;

    currentSlide += n * visibleSlides;

    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide + visibleSlides > totalSlides) {
        currentSlide = totalSlides - visibleSlides;
    }

    const carrossel = document.querySelector('.lista-produtos');
    const slideWidth = carrossel.offsetWidth / visibleSlides;
    carrossel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function atualizarProdutos() {
    filtrarProdutos();
    ordenarProdutos();
}

function filtrarProdutos() {
    const categoria = document.getElementById('categoria').value;
    const marca = document.getElementById('marca').value;
    const produtos = document.querySelectorAll('.produto');

    produtos.forEach(produto => {
        const produtoCategoria = produto.getAttribute('data-categoria');
        const produtoMarca = produto.getAttribute('data-marca');

        let categoriaMatch = categoria === 'todos' || produtoCategoria === categoria;
        let marcaMatch = marca === 'todas' || produtoMarca === marca;

        if (categoriaMatch && marcaMatch) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });

    ordenarProdutos();
}

function ordenarProdutos() {
    const ordenar = document.getElementById('ordenar').value;
    const listaProdutos = document.querySelector('.lista-produtos');
    let produtos = Array.from(listaProdutos.querySelectorAll('.produto'));

    produtos = produtos.filter(produto => produto.style.display !== 'none');

    produtos.sort((a, b) => {
        const precoA = parseFloat(a.getAttribute('data-preco'));
        const precoB = parseFloat(b.getAttribute('data-preco'));
        const avaliacaoA = parseFloat(a.getAttribute('data-avaliacao'));
        const avaliacaoB = parseFloat(b.getAttribute('data-avaliacao'));

        if (ordenar === 'menor-preco') {
            return precoA - precoB;
        } else if (ordenar === 'maior-preco') {
            return precoB - precoA;
        } else if (ordenar === 'avaliacao') {
            return avaliacaoB - avaliacaoA;
        } else if (ordenar === 'novidades') {
            return precoA;
        }
    });

    produtos.forEach(produto => {
        listaProdutos.appendChild(produto);
    });

    currentSlide = 0;
    moveSlide(0);
}

function adicionarAoCarrinho(event, botao) {
    event.preventDefault();

    const produto = botao.closest('.produto');
    const nome = produto.querySelector('h3').innerText;
    const preco = produto.querySelector('p:nth-child(4)').innerText;

    carrinho.push({ nome, preco });

    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoQuantidade = document.getElementById('carrinho-quantidade');
    const listaCarrinho = document.getElementById('lista-carrinho');

    carrinhoQuantidade.innerText = carrinho.length;
    listaCarrinho.innerHTML = '';

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.nome} - ${item.preco}`;
        listaCarrinho.appendChild(li);
    });

    document.getElementById('carrinho').style.display = 'block';
}

function fecharCarrinho() {
    document.getElementById('carrinho').style.display = 'none';
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

document.getElementById('form-cadastro')?.addEventListener('submit', function (e) {
    const senha = document.getElementById('senha').value;
    if (senha.length < 6) {
        e.preventDefault();
        alert('A senha deve ter pelo menos 6 caracteres.');
    }
});

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Formulário enviado com sucesso!');
    });
});

function openTab(event, tabName) {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => link.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    event.currentTarget.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

function fecharModal() {
    document.getElementById('login-cadastro-modal').style.display = 'none';
}

document.querySelector('.menu-icon').addEventListener('click', function () {
    const navUl = document.querySelector('nav ul');
    navUl.classList.toggle('active');
});

document.addEventListener('click', function (event) {
    const navUl = document.querySelector('nav ul');
    const menuIcon = document.querySelector('.menu-icon');

    if (!menuIcon.contains(event.target)) {
        navUl.classList.remove('active');
    }
});

new window.VLibras.Widget('https://vlibras.gov.br/app');