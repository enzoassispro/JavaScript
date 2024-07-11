const campo = document.querySelector("#campo");
const salvar = document.querySelector("#salvar");

//criando um elemento p
const pMensagem = document.createElement('p');

 //adicionando evento no botão de click salvar
 salvar.addEventListener("click",function() {
    const valor = campo.value;

    if(valor.trim() === ''){
      //alert("Preencha esse campo");
      pMensagem.textContent = "Campo obrigatório";
      campo.insertAdjacentElement("afterend", pMensagem)
      pMensagem.setAttribute("class", "error");
      return;
   }

    // salvar no storage
    const chave = `valorSalvo${Date.now()}`;
    localStorage.setItem(chave, valor);

    //limpar campo após salvar
    campo.value = "";

    //exibir valores salvos
    carregarValoresSalvos();


 });