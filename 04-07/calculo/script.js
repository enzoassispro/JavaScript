 // Obtém o elemento do DOM
 let valor1 = document.getElementById("valor1");
 let valor2 = document.getElementById("valor2");
 // Botões
const btnSomar = document.getElementById("btnSomar");
const btnSubtrair = document.getElementById("btnSubtrair");
const btnDividir = document.getElementById("btnDividir");
const btnMultiplicar = document.getElementById("btnMultiplicar")


 // Botão resultado
 let resultado = document.getElementById("resultado")

 //adiciona um evento de click no Botão
 btnSomar.addEventListener("click", function() { 
    // Converte os valores dos inputs para números e soma 
    let soma = Number(valor1.value) + Number(valor2.value);

    //Exibe o resultado na tela
    resultado.textContent = soma;

    valor1.value = "";
    valor2.value = "";

    setTimeout(function(){
        resultado.innerHTML = 0;
    }, 2000);
});

// subtrair
btnSubtrair.addEventListener("click", function() {
    let soma = Number(valor1.value) - Number(valor2.value)

    resultado.textContent = soma;

    valor1.value = "";
    valor2.value = "";

    setTimeout(function(){
        resultado.innerHTML = 0;
    }, 2000);
});

//dividir
btnDividir.addEventListener("click", function() {
    let soma = Number(valor1.value) / Number(valor2.value)

    resultado.textContent = soma;
    
    valor1.value = "";
    valor2.value = "";
    
    setTimeout(function(){
        resultado.innerHTML = 0;
    }, 2000);
});

// multiplicar
btnMultiplicar.addEventListener("click", function() {
    let soma = Number(valor1.value) * Number(valor2.value)

    resultado.textContent = soma;
    
    valor1.value = "";
    valor2.value = "";

    setTimeout(function(){
        resultado.innerHTML = 0;
    }, 2000);

});
