function calcular() {
    let valorLanche = Number(document.querySelector("#lanches").value);
    let valorAdicionais = calcularAdicionais();
    let valorTotal = valorLanche + valorAdicionais;

    document.querySelector("#valorPagar").textContent =
        "Total à Pagar: R$ " + valorTotal.toFixed(2);
}

document.querySelector("#calcularDesc").addEventListener('click', calcularDesc);

function calcularDesc() {
    let valorLanche = Number(document.querySelector("#lanches").value);
    let valorAdicionais = calcularAdicionais();
    let valorTotal = valorLanche + valorAdicionais;

    let valorComDesconto = valorTotal * 0.9;

    document.querySelector("#valorPagarDesc").textContent =
        "Total com Desconto: R$ " + valorComDesconto.toFixed(2);
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