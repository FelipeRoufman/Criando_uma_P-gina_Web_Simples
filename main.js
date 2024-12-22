// Função para inicializar o carrossel
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Função para mostrar a imagem ativa e mover para a próxima
function showNextImage() {
    // Remover a classe "active" das imagens atuais
    items[currentIndex].classList.remove('active');

    // Calcular o próximo índice (circular)
    currentIndex = (currentIndex + 1) % totalItems;

    // Adicionar a classe "active" para a próxima imagem
    items[currentIndex].classList.add('active');
}

function toggleMenu(menuId) {
    var menu = document.getElementById(menuId);
    menu.classList.toggle('visible');
}


// Iniciar o carrossel e troque a imagem a cada 15 segundos
setInterval(showNextImage, 5000);

// Inicializar o carrossel com a primeira imagem
showNextImage();