/*váriaveis que serão usadas nas funções, as primeiras, 
para guardar elementos HTML selecionados usando o DOM */

const bolas = document.getElementsByClassName('ball');
const textoCor = document.getElementById('rgb-color');
const textoResposta = document.getElementById('answer');
const botaoReiniciar = document.getElementById('reset-game');
const cores = [];
/* array vazio serve para ser usado posteriormente */

function numeroAleatorio(mul) { //recebe o parametro mul quando é chamada//
    const numero = Math.floor(Math.random() * mul); //multiplica um valor aleatório, gerado pela Math.random//
    return numero; // este numero é arredondado através do Math.floor, retorna a variavel numero
}
// aqui a função gera uma cor aleatório em si//
function corAleatoria() {
    const rgb = `rgb(${numeroAleatorio(256)}, ${numeroAleatorio(256)}, ${numeroAleatorio(256)})`;
    return rgb; //string literals e retorna o valor que está na constante
}
//O RGB vai de 0 a 255
function cliqueNaBola(event) {
    const corSelecionada = event.target.style.backgroundcolor;
    if (corSelecionada === textoCor.textContent) {
        textoResposta.textContent = 'Acertou!';
    } else {
        textoResposta.textContent = 'Errou! Tente novamente!';
    }
}

for (let bola = 0; bola < bolas.length; bola += 1) {
    const cor = corAleatoria();
    bolas[bola].style.backgroundColor = cor;
    cores[bola] = cor;
    bolas[bola].addEventListener('click', cliqueNaBola);
    
    /* 
    1ª linha: ele só ta salvando a cor gerada pela função corAleatoria()
    2ª linha: ele pega UMA das bolas, vai na backgroundColor dela e adiciona a cor aleatoria
    3ª linha: ele vai no array cores (array vazio acima) e adiciona a mesma cor da bola, na mesma posição que a bola está
    4ª linha: por ultimo ele pega UMA das bolas, e adiciona um escutador.
    */

}

function adicionaCorAleatoria() {
    textoCor.textContent = cores[numeroAleatorio(6)];
}

adicionaCorAleatoria();

function reiniciajogo() {
    window.location.reload();
}

botaoReiniciar.addEventListener('click', reiniciajogo); //clica no botão para reiniciar o jogo

/* A função adicionarCorAleatoria pega o conteúdo do array na posição e joga no
textoCor.textContent, fazendo assim, mudar o texto da página (os números do RGB)

function reiniciajogo: faz reiniciar o jogo [é uma função que chama outra função (reload) dentro da URL da 
página.  */
