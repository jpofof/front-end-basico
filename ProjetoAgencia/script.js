  let pacoteSelecionadoValor = 0;
  let pacoteSelecionadoNome = "";

  function selecionarPacote(nome, valor) {
    pacoteSelecionadoValor = valor;
    pacoteSelecionadoNome = nome.charAt(0).toUpperCase() + nome.slice(1);

    document.querySelectorAll('.card').forEach(c => c.classList.remove('selecionado'));
    document.getElementById('card' + nome.charAt(0).toUpperCase() + nome.slice(1)).classList.add('selecionado');
    document.getElementById('pacote' + nome.charAt(0).toUpperCase() + nome.slice(1)).checked = true;
  }

  function calcularAdicionais() {
    let lista = document.querySelectorAll("input[name='adicionais']");
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].checked) soma += Number(lista[i].value);
    }
    return soma;
  }

  function calcularCortesia() {
    let lista = document.querySelectorAll("input[name='cortesia']");
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].checked) return Number(lista[i].value);
    }
    return 0;
  }

  function calcular() {
    if (pacoteSelecionadoValor === 0) {
      alert("Por favor, selecione um pacote de viagem.");
      return;
    }
    let valorAdicionais = calcularAdicionais();
    let valorCortesia = calcularCortesia();
    let valorTotal = pacoteSelecionadoValor + valorAdicionais + valorCortesia;
    document.querySelector("#valorPagar").textContent =
      "Pacote: " + pacoteSelecionadoNome + " | Total à Pagar: R$ " + valorTotal.toFixed(2);
  }

  document.querySelector("#calcularDesc").addEventListener('click', function () {
    if (pacoteSelecionadoValor === 0) {
      alert("Por favor, selecione um pacote de viagem.");
      return;
    }
    let codigo = document.querySelector("#codigoPromo").value.trim().toUpperCase();
    if (codigo !== "FERIAS10") {
      alert("Código promocional inválido.");
      return;
    }
    let valorAdicionais = calcularAdicionais();
    let valorCortesia = calcularCortesia();
    let valorTotal = pacoteSelecionadoValor + valorAdicionais + valorCortesia;
    let valorComDesconto = valorTotal * 0.9;
    document.querySelector("#valorPagarDesc").textContent =
      "Pacote: " + pacoteSelecionadoNome + " | Total com Desconto (10%): R$ " + valorComDesconto.toFixed(2);
  });

  document.querySelector("#imprimirPedido").addEventListener('click', function () {
    window.print();
  });

  document.querySelector("#novoPedido").addEventListener('click', function () {
    document.getElementById('formulario').reset();
    pacoteSelecionadoValor = 0;
    pacoteSelecionadoNome = "";
    document.querySelectorAll('.card').forEach(c => c.classList.remove('selecionado'));
    document.querySelector("#valorPagar").textContent = "Total à Pagar:";
    document.querySelector("#valorPagarDesc").textContent = "Total à Pagar com Desconto:";
  });