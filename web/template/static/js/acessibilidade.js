
const toggleButton = document.getElementById('toggle-contrast');
let contrastEnabled = false;

toggleButton.addEventListener('click', function () {
    const body = document.body;
    const elementsToChange = document.querySelectorAll('*'); // Seleciona todos os elementos na página

    if (contrastEnabled) {
        // Desativa o contraste
        body.style.backgroundColor = '';
        body.style.color = '';

        // Remove a classe de alto contraste do body
        body.classList.remove('high-contrast');

        // Reverte as cores originais de todos os elementos
        elementsToChange.forEach(function (element) {
            element.style.backgroundColor = '';
            element.style.color = '';
        });
    } else {
        // Ativa o contraste
        body.style.backgroundColor = '#000000';
        body.style.color = '#ffffff'; // Amarelo

        // Adiciona a classe de alto contraste ao body
        body.classList.add('high-contrast');

        // Define cores de alto contraste para todos os elementos
        elementsToChange.forEach(function (element) {
            element.style.backgroundColor = '#000000';
            element.style.color = '#ffffff';
        });
    }

    contrastEnabled = !contrastEnabled;
});

// Função para aumentar a fonte
document.getElementById("increase-font-size").addEventListener("click", function () {
    const body = document.body;
    const currentSize = getComputedStyle(body).fontSize;
    const newSize = (parseInt(currentSize) + 2) + "px";
    body.style.fontSize = newSize;
});

// Botão "Voltar ao Topo"
var btnTop = document.getElementById("btn-top");

// Mostra o botão quando o usuário rolar para baixo 20 pixels a partir do topo
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTop.classList.remove("d-none");
    } else {
        btnTop.classList.add("d-none");
    }
};

// Função para rolar suavemente de volta ao topo
btnTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



document.getElementById("increase-letter-spacing").addEventListener("click", function () {
    // Verifica se a classe increased-letter-spacing já está presente no body
    const body = document.body;
    const hasIncreasedLetterSpacing = body.classList.contains("increased-letter-spacing");

    // Se a classe já estiver presente, remova-a; caso contrário, adicione-a
    if (hasIncreasedLetterSpacing) {
        body.classList.remove("increased-letter-spacing");
    } else {
        body.classList.add("increased-letter-spacing");
    }
});

  document.getElementById("accessibility-info").addEventListener("click", function() {
    // Redireciona para a página "acessibilidade.html"
    window.location.href = "acessibilidade.html";
  });
