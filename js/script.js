let currentSlide = 0;

function moverCarrossel(direction) {
    const carrossel = document.querySelector('.produtos-container');
    const totalSlides = carrossel.children.length;
    const maxSlide = totalSlides - 3;
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide > maxSlide) {
        currentSlide = maxSlide;
    }

    const slideWidth = carrossel.children[0].offsetWidth;
    carrossel.style.transform = `translateX(-${currentSlide * (slideWidth + 20)}px)`;
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
    const listaProdutos = document.querySelector('.produtos-container');
    let produtos = Array.from(listaProdutos.querySelectorAll('.produto'));

    produtos = produtos.filter(produto => produto.style.display !== 'none');

    produtos.sort((a, b) => {
        const precoA = parseFloat(a.getAttribute('data-preco'));
        const precoB = parseFloat(b.getAttribute('data-preco'));

        if (ordenar === 'menor-preco') {
            return precoA - precoB;
        } else {
            return precoB - precoA;
        }
    });

    produtos.forEach(produto => {
        listaProdutos.appendChild(produto);
    });

    currentSlide = 0;
    moverCarrossel(0);
}

document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('active');
});

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
