//Obtém os botões do DOM
let btnMudarCor = document.getElementById("btnMudarCor");
let btnVoltarCor = document.getElementById("btnVoltarCor");

//Adiciona um evento de clique ao botão 'Mudar cor de fundo'
//'addEventListener' escutar o evento
btnMudarCor.addEventListener("click", function() {
    document.body.style.background = "gray";
});
btnVoltarCor.addEventListener("click", function(){
    document.body.style.background = "";
});

