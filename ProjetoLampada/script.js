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