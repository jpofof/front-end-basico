document.querySelector("#imprimirPedido").addEventListener('click', function () {
    window.print();
});

document.querySelector("#novoPedido").addEventListener('click', function () {
    document.getElementById('formulario').reset();
});

function calcular() {
    let valorLanche = Number(document.querySelector("#lanches").value);
    let nomeLanche = pegarNomeLanche();
    let valorAdicionais = calcularAdicionais();
    let valorEntrega = calcularEntrega();

    let valorTotal = valorLanche + valorAdicionais + valorEntrega;

    document.querySelector("#valorPagar").textContent =
        "Lanche: " + nomeLanche + " | Total à Pagar: R$ " + valorTotal.toFixed(2);
}

document.querySelector("#calcularDesc").addEventListener('click', calcularDesc);

function calcularDesc() {
    let valorLanche = Number(document.querySelector("#lanches").value);
    let nomeLanche = pegarNomeLanche();
    let valorAdicionais = calcularAdicionais();
    let valorEntrega = calcularEntrega();

    let valorTotal = valorLanche + valorAdicionais + valorEntrega;

    let valorComDesconto = valorTotal * 0.9;

    document.querySelector("#valorPagarDesc").textContent =
        "Lanche: " + nomeLanche + " | Total com Desconto: R$ " + valorComDesconto.toFixed(2);
}

function calcularAdicionais() {
    let lista = document.querySelectorAll("input[name='adicionais']");
    let soma = 0;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].checked) {
            soma += Number(lista[i].value);
        }
    }
    return soma;
}

function calcularEntrega() {
    let lista = document.querySelectorAll("input[name='recebimentos']");
    let valor = 0;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].checked) {
            valor = Number(lista[i].value);
        }
    }
    return valor;
}

function pegarNomeLanche() {
    let lista = document.querySelector("#lanches");
    let nome = "";

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].selected) {
            nome = lista[i].text;
        }
    }
    return nome;
}