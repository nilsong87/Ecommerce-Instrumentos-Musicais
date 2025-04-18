let currentSlide = 0;

function moverCarrossel(direction) {
    const carrossel = document.querySelector('.produtos-container');
    const totalSlides = carrossel.children.length;
    const slidesVisiveis = window.innerWidth <= 768 ? 1 : 3;
    const maxSlide = totalSlides - slidesVisiveis;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide > maxSlide) {
        currentSlide = maxSlide;
    }

    const slideWidth = carrossel.children[0].offsetWidth;
    const spacing = 20; 
    const deslocamento = currentSlide * (slideWidth + spacing);

    carrossel.style.transform = `translateX(-${deslocamento}px)`;
}

document.querySelector('.prev-btn').addEventListener('click', () => moverCarrossel(-1));
document.querySelector('.next-btn').addEventListener('click', () => moverCarrossel(1));

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

    if (!menuIcon.contains(event.target) && !navUl.contains(event.target)) {
        navUl.classList.remove('active');
    }
});