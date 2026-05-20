document.querySelector("#consultar").addEventListener('click', async function () 
{
    let cep = document.querySelector("#cepInformado").value;
    let endAPI = `https://viacep.com.br/ws/${cep}/json/`;
   try{

   let respostaAPI = await fetch(endAPI);
    let objJS = await respostaAPI.json();
    document.getElementById("resposta").innerHTML = `Cidade: ${objJS.localidade} / UF: ${objJS.uf} - Logradouro: ${objJS.logradouro}`;
   }
   catch{
    alert("ERRO!!")
   }
})