let copo = document.querySelector(".copo-starbucks");
let circulo = document.querySelector(".circulo");

function trocaCopo(imagemSrc, cor) {
    // Atualiza a imagem do copo
    copo.src = imagemSrc;

    // Adiciona animação de "crescer e voltar"
    copo.classList.remove("animar-copo");
    void copo.offsetWidth; // força reflow
    copo.classList.add("animar-copo");

    // Atualiza a cor do círculo
    circulo.style.background = cor;

    // Efeito de expansão do círculo
    circulo.style.transform = "scale(1.05)";
    setTimeout(() => {
        circulo.style.transform = "scale(1)";
    }, 300);
}
