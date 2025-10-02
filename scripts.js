// Seleciona os elementos principais do DOM
let copo = document.querySelector(".copo-starbucks"); // pega a imagem do copo principal
let circulo = document.querySelector(".circulo");     // pega o círculo verde atrás do copo

/**
 * Função que troca a imagem do copo e altera a cor do círculo,
 * aplicando também efeitos de animação.
 * 
 * @param {string} imagemSrc - Caminho da nova imagem do copo
 * @param {string} cor - Nova cor de fundo para o círculo
 */
function trocaCopo(imagemSrc, cor) {
    // --- Atualiza a imagem do copo ---
    copo.src = imagemSrc;

    // --- Anima o copo (efeito de "crescer e voltar") ---
    copo.classList.remove("animar-copo"); // remove para reiniciar a animação
    void copo.offsetWidth;                // força o navegador a recalcular o layout (reflow)
    copo.classList.add("animar-copo");    // adiciona de novo a classe para rodar a animação

    // --- Muda a cor do círculo ---
    circulo.style.background = cor;

    // --- Efeito de expansão rápida no círculo ---
    circulo.style.transform = "scale(1.05)"; // aumenta 5%
    setTimeout(() => {
        circulo.style.transform = "scale(1)"; // volta ao tamanho original após 300ms
    }, 300);
}
