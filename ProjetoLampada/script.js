let lampada = document.getElementById("lampada");

function ligar() {
    lampada.setAttribute("src", "imagens/luzLigada.gif");
}

function apagar() {
    lampada.setAttribute("src", "imagens/luzDesligada.gif");
}

function sumir() {
    //lampada.style.display = "none";
    //ou
    lampada.hidden = true;

}

function aparecer() {
    lampada.hidden = false;
    //ou
    //lampada.style.display ="block";
}

function piscar() {
    if(lampada.getAttribute ("src") == "imagens/luzDesligada.gif")
        ligar()
    else if (lampada.getAttribute ("src") == "imagens/luzLigada.gif")
        apagar();

}

function piscarAutomatico(){
    piscar = setInterval(piscar, 500);
}

function paraPiscar() {
    clearInterval(piscar);


    
}
function paraAumentar(){
    let tamanhoAtual = lampada.width;
    lampada.style.width = (tamanhoAtual + 50) + "px";
}
function paraDiminuir(){
    let tamanhoAtual = lampada.width;
    if(tamanhoAtual > 80) {
        let novoTamanho = tamanhoAtual - 50;
        lampada.style.width = novoTamanho + "px";
        lampada.style.height = "auto";
}
}